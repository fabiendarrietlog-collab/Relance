import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accès réservé | Relance",
  robots: { index: false },
};

export default function Acces() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 py-10 font-texte">
      <p className="text-sm font-semibold uppercase tracking-widest text-rouille">
        Relance
      </p>
      <h1 className="mt-4 font-titre text-3xl font-extrabold leading-tight">
        Aucun abonnement actif sur ce compte.
      </h1>
      <p className="mt-3 text-lg">
        Pour utiliser Relance, il faut un abonnement. Si vous venez de payer,
        patientez une minute puis rechargez la page. Si le problème continue,
        répondez à l&apos;email de confirmation reçu après votre paiement.
      </p>
      <a
        href="/#acheter"
        className="mt-8 flex w-full items-center justify-center rounded-md bg-rouille px-6 py-4 text-lg font-semibold text-papier"
      >
        Voir l&apos;offre
      </a>
      <a href="/" className="mt-6 text-sm font-semibold text-rouille">
        &larr; Retour à l&apos;accueil
      </a>
    </main>
  );
}
