import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ajouterDevis } from "../actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nouveau devis | Relance",
  robots: { index: false },
};

export default async function NouveauDevis({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string }>;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { erreur } = await searchParams;

  const champ =
    "mt-2 w-full rounded-md border border-encre/30 bg-white px-4 py-4 text-lg";

  return (
    <main className="mx-auto max-w-xl px-5 py-10 font-texte">
      <a href="/devis" className="text-sm font-semibold text-rouille">
        &larr; Mes devis
      </a>
      <h1 className="mt-6 font-titre text-3xl font-extrabold">Nouveau devis</h1>
      <p className="mt-2 text-encre/70">
        Trois informations suffisent.
      </p>

      <form action={ajouterDevis} className="mt-6 space-y-5">
        <div>
          <label htmlFor="client_name" className="block font-semibold">
            Nom du client
          </label>
          <input
            id="client_name"
            name="client_name"
            type="text"
            required
            maxLength={120}
            autoComplete="off"
            className={champ}
          />
        </div>

        <div>
          <label htmlFor="client_email" className="block font-semibold">
            Email du client
          </label>
          <input
            id="client_email"
            name="client_email"
            type="email"
            required
            maxLength={254}
            inputMode="email"
            autoComplete="off"
            className={champ}
          />
        </div>

        <div>
          <label htmlFor="montant" className="block font-semibold">
            Montant du devis (en euros)
          </label>
          <input
            id="montant"
            name="montant"
            type="text"
            required
            inputMode="decimal"
            placeholder="1500"
            autoComplete="off"
            className={champ}
          />
        </div>

        {erreur && (
          <p className="text-rouille">
            {erreur === "1"
              ? "Vérifiez le nom, l'email et le montant, puis réessayez."
              : "Le devis n'a pas pu être enregistré. Réessayez dans un instant."}
          </p>
        )}

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-rouille px-6 py-4 text-lg font-semibold text-papier"
        >
          Enregistrer le devis
        </button>
      </form>
    </main>
  );
}
