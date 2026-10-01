import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Relance",
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10 font-texte">
      <a href="/" className="text-sm font-semibold text-rouille">
        &larr; Retour à l&apos;accueil
      </a>
      <h1 className="mt-6 font-titre text-3xl font-extrabold">
        Mentions légales
      </h1>

      <h2 className="mt-8 font-titre text-xl font-semibold">Éditeur du site</h2>
      <p className="mt-2">
        Relance est édité par [À COMPLÉTER : prénom et nom], entrepreneur
        individuel, nom commercial « Relance ».
      </p>
      <p className="mt-2">SIRET : [À COMPLÉTER : numéro, une fois reçu].</p>
      <p className="mt-2">Adresse : [À COMPLÉTER : adresse de l&apos;activité].</p>
      <p className="mt-2">Email : [À COMPLÉTER : adresse de contact].</p>
      <p className="mt-2">
        TVA non applicable, article 293 B du Code général des impôts.
      </p>

      <h2 className="mt-8 font-titre text-xl font-semibold">
        Directeur de la publication
      </h2>
      <p className="mt-2">[À COMPLÉTER : prénom et nom].</p>

      <h2 className="mt-8 font-titre text-xl font-semibold">Hébergeur</h2>
      <p className="mt-2">
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        Site : vercel.com.
      </p>

      <h2 className="mt-8 font-titre text-xl font-semibold">Paiements</h2>
      <p className="mt-2">
        Les paiements sont traités par Stripe. Relance ne conserve aucun numéro
        de carte bancaire.
      </p>

      <h2 className="mt-8 font-titre text-xl font-semibold">
        Propriété intellectuelle
      </h2>
      <p className="mt-2">
        Les textes, la mise en page et le nom Relance sont la propriété de
        l&apos;éditeur. Toute reproduction sans accord écrit est interdite.
      </p>
    </main>
  );
}
