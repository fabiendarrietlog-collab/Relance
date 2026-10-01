import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Relance",
};

const sections = [
  {
    titre: "Qui est responsable de vos données",
    texte:
      "[À COMPLÉTER : prénom et nom], entrepreneur individuel, SIRET [À COMPLÉTER]. Contact : [À COMPLÉTER : adresse email].",
  },
  {
    titre: "Quelles données nous traitons",
    texte:
      "Lors du paiement : votre adresse email et les informations de facturation que vous saisissez chez Stripe. Relance ne voit ni ne conserve votre numéro de carte bancaire. Sur le site, nous mesurons l'audience de façon anonyme, sans cookie publicitaire.",
  },
  {
    titre: "Pourquoi",
    texte:
      "Pour encaisser votre abonnement, vous donner accès au service, vous envoyer vos reçus et répondre à vos questions. La base légale est l'exécution du contrat.",
  },
  {
    titre: "Qui y a accès",
    texte:
      "Stripe (paiement) et Vercel (hébergement du site) traitent des données pour notre compte. Ces prestataires peuvent être situés hors de l'Union européenne. Nous ne vendons aucune donnée.",
  },
  {
    titre: "Combien de temps",
    texte:
      "Vos données sont conservées pendant la durée de l'abonnement, puis le temps nécessaire aux obligations comptables et légales.",
  },
  {
    titre: "Vos droits",
    texte:
      "Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à [À COMPLÉTER : adresse email]. Vous pouvez aussi saisir la CNIL (cnil.fr).",
  },
];

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10 font-texte">
      <a href="/" className="text-sm font-semibold text-rouille">
        &larr; Retour à l&apos;accueil
      </a>
      <h1 className="mt-6 font-titre text-3xl font-extrabold">
        Politique de confidentialité
      </h1>
      {sections.map((s) => (
        <section key={s.titre}>
          <h2 className="mt-8 font-titre text-xl font-semibold">{s.titre}</h2>
          <p className="mt-2">{s.texte}</p>
        </section>
      ))}
    </main>
  );
}
