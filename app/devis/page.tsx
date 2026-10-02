import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mes devis | Relance",
  robots: { index: false },
};

type Statut = "envoye" | "ouvert" | "signe" | "perdu";

type Devis = {
  id: string;
  client_name: string;
  amount_cents: number;
  status: Statut;
  sent_at: string;
};

const libelles: Record<Statut, string> = {
  envoye: "Envoyé",
  ouvert: "Ouvert",
  signe: "Signé",
  perdu: "Perdu",
};

function euros(cents: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

function jour(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
}

export default async function MesDevis() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { data } = await supabase
    .from("quotes")
    .select("id, client_name, amount_cents, status, sent_at")
    .order("sent_at", { ascending: false });

  const devis = (data ?? []) as Devis[];

  const compte = (s: Statut) => devis.filter((d) => d.status === s).length;
  const enJeu = devis
    .filter((d) => d.status === "envoye" || d.status === "ouvert")
    .reduce((somme, d) => somme + d.amount_cents, 0);

  const compteurs: { label: string; valeur: number }[] = [
    { label: "Envoyés", valeur: compte("envoye") },
    { label: "Ouverts", valeur: compte("ouvert") },
    { label: "Signés", valeur: compte("signe") },
    { label: "Perdus", valeur: compte("perdu") },
  ];

  return (
    <main className="mx-auto max-w-xl px-5 py-10 font-texte">
      <p className="text-sm font-semibold uppercase tracking-widest text-rouille">
        Relance
      </p>
      <h1 className="mt-3 font-titre text-3xl font-extrabold">Mes devis</h1>
      <p className="mt-1 text-sm text-encre/70">{user.email}</p>

      <section className="mt-8 border-t border-encre/20 pt-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-encre/60">
          Montant en jeu
        </p>
        <p className="mt-2 font-titre text-5xl font-extrabold text-rouille">
          {euros(enJeu)}
        </p>
        <p className="mt-1 text-sm text-encre/70">
          Devis envoyés ou ouverts, pas encore signés.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-4 gap-2 border-t border-encre/20 pt-6">
        {compteurs.map((c) => (
          <div key={c.label}>
            <p className="font-titre text-3xl font-extrabold">{c.valeur}</p>
            <p className="text-xs uppercase tracking-wider text-encre/60">
              {c.label}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-8 border-t border-encre/20 pt-6">
        {devis.length === 0 ? (
          <div>
            <h2 className="font-titre text-xl font-semibold">
              Aucun devis pour l&apos;instant
            </h2>
            <p className="mt-2">
              Ajoutez votre premier devis : le nom du client, son email et le
              montant. Relance s&apos;occupe des trois relances et vous prévient
              à l&apos;ouverture.
            </p>
            <p className="mt-3 text-sm text-encre/70">
              L&apos;ajout d&apos;un devis arrive très bientôt sur cet écran.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-encre/15">
            {devis.map((d) => (
              <li
                key={d.id}
                className="flex items-center justify-between gap-4 py-4"
              >
                <div>
                  <p className="font-semibold">{d.client_name}</p>
                  <p className="text-sm text-encre/70">
                    {libelles[d.status]}, envoyé le {jour(d.sent_at)}
                  </p>
                </div>
                <p className="font-titre text-xl font-semibold">
                  {euros(d.amount_cents)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
