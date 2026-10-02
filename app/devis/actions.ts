"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { aAbonnementActif } from "@/lib/abonnement";
export async function ajouterDevis(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const nom = String(formData.get("client_name") ?? "").trim();
  const email = String(formData.get("client_email") ?? "")
    .trim()
    .toLowerCase();
  const montant = Number(
    String(formData.get("montant") ?? "")
      .replace(/\s/g, "")
      .replace(",", ".")
  );

  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (
    nom.length < 1 ||
    nom.length > 120 ||
    !emailValide ||
    email.length > 254 ||
    !Number.isFinite(montant) ||
    montant <= 0 ||
    montant > 1000000
  ) {
   if (!user) {
    redirect("/connexion");
  }

  if (!(await aAbonnementActif(supabase, user.id))) {
    redirect("/acces");
  }

  const { error } = await supabase.from("quotes").insert({
    user_id: user.id,
    client_name: nom,
    client_email: email,
    amount_cents: Math.round(montant * 100),
  });

  if (error) {
    redirect("/devis/nouveau?erreur=2");
  }

  redirect("/devis");
}
