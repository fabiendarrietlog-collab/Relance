import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente | Relance",
};

const sections = [
  {
    titre: "1. Objet",
    texte:
      "Les présentes conditions encadrent la vente de l'abonnement à Relance, un service en ligne de relance automatique de devis, proposé par [À COMPLÉTER : prénom et nom], entrepreneur individuel, SIRET [À COMPLÉTER].",
  },
  {
    titre: "2. Offre et prix",
    texte:
      "L'abonnement coûte 35 € par mois. TVA non applicable, article 293 B du Code général des impôts. Le prix indiqué au moment du paiement est le prix facturé.",
  },
  {
    titre: "3. Accès fondateur et date d'ouverture",
    texte:
      "Le service est en cours de finalisation. L'accès sera ouvert au plus tard le [À COMPLÉTER : date d'ouverture]. Si l'accès n'est pas ouvert à cette date, le client peut demander le remboursement intégral des sommes versées.",
  },
  {
    titre: "4. Paiement",
    texte:
      "Le paiement s'effectue par carte bancaire via Stripe. L'abonnement est prélevé chaque mois, à la date anniversaire de la souscription.",
  },
  {
    titre: "5. Durée et résiliation",
    texte:
      "L'abonnement est sans engagement. Le client peut le résilier à tout moment en écrivant à [À COMPLÉTER : adresse email de contact]. La résiliation prend effet à la fin de la période déjà payée, sans nouveau prélèvement ensuite.",
  },
  {
    titre: "6. Remboursement sous 14 jours",
    texte:
      "Le client peut demander le remboursement de son premier paiement dans les 14 jours suivant la souscription, sans avoir à se justifier, en écrivant à [À COMPLÉTER : adresse email de contact].",
  },
  {
    titre: "7. Responsabilité",
    texte:
      "Relance rédige et envoie des relances au nom du client, selon les messages que celui-ci a validés. Relance ne garantit pas la signature d'un devis. Le suivi des ouvertures est indicatif : certaines messageries peuvent empêcher de détecter une ouverture.",
  },
  {
    titre: "8. Données personnelles",
    texte:
      "Le traitement des données est décrit dans la politique de confidentialité, accessible depuis le pied de chaque page.",
  },
  {
    titre: "9. Litiges",
    texte:
      "Les présentes conditions sont soumises au droit français. En cas de litige, le client peut contacter l'éditeur à l'adresse ci-dessus avant toute autre démarche. [À COMPLÉTER : coordonnées du médiateur de la consommation, si le client est un particulier.]",
  },
];

export default function Cgv() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10 font-texte">
      <a href="/" className="text-sm font-semibold text-rouille">
        &larr; Retour à l&apos;accueil
      </a>
      <h1 className="mt-6 font-titre text-3xl font-extrabold">
        Conditions générales de vente
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
