import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci : votre accès est réservé",
  robots: { index: false },
};

export default function Merci() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 py-10 font-texte">
      <p className="text-sm font-semibold uppercase tracking-widest text-rouille">
        Relance
      </p>
      <h1 className="mt-4 font-titre text-4xl font-extrabold leading-tight">
        Merci, votre accès est réservé.
      </h1>
      <p className="mt-4 text-lg">
        Stripe vous envoie un reçu à l&apos;adresse utilisée pour le paiement.
        Nous vous écrivons à cette même adresse dès l&apos;ouverture de votre
        accès.
      </p>
      <p className="mt-3 text-sm text-encre/70">
        Une question ? Répondez simplement à l&apos;email que vous recevrez.
      </p>
      <a
        href="/"
        className="mt-8 flex w-full items-center justify-center rounded-md border border-encre/30 px-6 py-4 text-lg font-semibold"
      >
        Retour à l&apos;accueil
      </a>
    </main>
  );
}
