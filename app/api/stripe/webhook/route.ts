import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

type Admin = ReturnType<typeof createAdminClient>;

async function idUtilisateur(
  admin: Admin,
  email: string
): Promise<string | null> {
  const { data: existant } = await admin
    .from("profiles")
    .select("id")
    .eq("email", email)
    .maybeSingle();
  if (existant) return existant.id as string;

  const { data: cree, error } = await admin.auth.admin.createUser({
    email,
    email_confirm: true,
  });
  if (cree?.user) return cree.user.id;

  if (error) {
    const { data: retente } = await admin
      .from("profiles")
      .select("id")
      .eq("email", email)
      .maybeSingle();
    if (retente) return retente.id as string;
  }
  return null;
}

function finPeriode(sub: Stripe.Subscription): string | null {
  const t = (sub as unknown as { current_period_end?: number })
    .current_period_end;
  return typeof t === "number" ? new Date(t * 1000).toISOString() : null;
}

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const cleStripe = process.env.STRIPE_SECRET_KEY;
  const signature = request.headers.get("stripe-signature");

  if (!secret || !cleStripe || !signature) {
    return NextResponse.json({ error: "Configuration manquante" }, { status: 400 });
  }

  const stripe = new Stripe(cleStripe);
  const corps = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(corps, signature, secret);
  } catch {
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  try {
    const admin = createAdminClient();

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      if (
        session.mode === "subscription" &&
        session.subscription &&
        session.customer
      ) {
        const email = (
          session.customer_details?.email ??
          session.customer_email ??
          ""
        )
          .trim()
          .toLowerCase();

        if (!email) {
          return NextResponse.json({ error: "Email absent" }, { status: 400 });
        }

        const userId = await idUtilisateur(admin, email);
        if (!userId) {
          return NextResponse.json({ error: "Compte introuvable" }, { status: 500 });
        }

        const subId =
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription.id;
        const customerId =
          typeof session.customer === "string"
            ? session.customer
            : session.customer.id;

        const sub = await stripe.subscriptions.retrieve(subId);

        const { error } = await admin.from("subscriptions").upsert(
          {
            user_id: userId,
            stripe_customer_id: customerId,
            stripe_subscription_id: subId,
            status: sub.status,
            current_period_end: finPeriode(sub),
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id" }
        );

        if (error) {
          return NextResponse.json({ error: "Enregistrement impossible" }, { status: 500 });
        }
      }
    }

    if (
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      const sub = event.data.object as Stripe.Subscription;

      const { error } = await admin
        .from("subscriptions")
        .update({
          status: sub.status,
          current_period_end: finPeriode(sub),
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_subscription_id", sub.id);

      if (error) {
        return NextResponse.json({ error: "Mise à jour impossible" }, { status: 500 });
      }
    }
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
