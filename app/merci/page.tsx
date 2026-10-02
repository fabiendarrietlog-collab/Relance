import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci : votre paiement est confirmé",
  robots: { index: false },
};

export default function Merci() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 py-10 font-texte">
      <p className="text-sm font-semibold uppercase tracking-widest text-rouille">
        Relance
      </p>
      <h1 className="mt-4 font-titre text-4xl font-extrabold leading-tight">
        Merci, votre paiement est confirmé.
      </h1>
      <p className="mt-4 text-lg">
        Pour accéder à votre espace, connectez-vous avec l&apos;adresse email
        utilisée pour le paiement. Vous recevrez un lien de connexion par
        email.
      </p>
      <p className="mt-3 text-sm text-encre/70">
        Stripe vous envoie aussi un reçu à cette adresse. Un souci ? Répondez
        simplement à cet email.
      </p>
      <a
        href="/connexion"
        className="mt-8 flex w-full items-center justify-center rounded-md bg-rouille px-6 py-4 text-lg font-semibold text-papier"
      >
        Me connecter
      </a>
      <a href="/" className="mt-6 text-sm font-semibold text-rouille">
        &larr; Retour à l&apos;accueil
      </a>
    </main>
  );
}
