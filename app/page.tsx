const LIEN_PAIEMENT = "https://buy.stripe.com/test_9B63cxehE8nNcIK1fy6EU01";

const benefices = [
  {
    titre: "Trois relances écrites pour vous",
    texte:
      "À J+3, J+7 et J+14, un message poli part au nom de votre entreprise. Vous pouvez le modifier.",
  },
  {
    titre: "Vous savez quand le devis est ouvert",
    texte:
      "Une notification arrive dès que votre client ouvre le devis. Vous appelez au bon moment.",
  },
  {
    titre: "Tout est sur un seul écran",
    texte:
      "Envoyés, ouverts, signés, perdus, avec le montant en jeu. Pas de tableur à tenir.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-32 pt-10 font-texte sm:pb-16 sm:pt-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-rouille">
        Relance
      </p>

      <h1 className="mt-4 font-titre text-4xl font-extrabold leading-tight sm:text-5xl">
        Vos devis sans réponse se relancent tout seuls.
      </h1>

      <p className="mt-5 text-lg">
        Un devis jamais relancé est un devis perdu. Relance l&apos;écrit,
        l&apos;envoie et vous prévient quand il est ouvert.
      </p>

      <a
        href={LIEN_PAIEMENT}
        className="mt-8 hidden w-full items-center justify-center rounded-md bg-rouille px-6 py-4 text-lg font-semibold text-papier sm:flex"
      >
        Réserver mon accès : 35 € par mois
      </a>

      <section className="mt-14 border-t border-encre/20 pt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-encre/60">
          Ce que ça coûte de ne pas relancer
        </p>
        <p className="mt-3 font-titre text-6xl font-extrabold text-rouille">
          3 000 €
        </p>
        <p className="mt-3">
          Exemple : vous envoyez 20 devis de 1 500 € par mois. Si seulement 2
          d&apos;entre eux sont perdus faute de relance, c&apos;est 3 000 € qui
          partent chez un concurrent.
        </p>
        <p className="mt-3 font-semibold">
          Un seul devis sauvé rembourse plusieurs mois d&apos;abonnement.
        </p>
      </section>

      <section className="mt-14 border-t border-encre/20 pt-8">
        <ul className="space-y-8">
          {benefices.map((b, i) => (
            <li key={b.titre} className="flex gap-4">
              <span className="font-titre text-3xl font-extrabold text-rouille">
                {i + 1}
              </span>
              <div>
                <h2 className="font-titre text-xl font-semibold">{b.titre}</h2>
                <p className="mt-1">{b.texte}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="acheter"
        className="mt-14 border-t border-encre/20 pt-8"
      >
        <h2 className="font-titre text-2xl font-semibold">
          Accès fondateur : 35 € par mois
        </h2>
        <p className="mt-3">
          Le produit est en cours de finalisation. En réservant maintenant,
          vous obtenez l&apos;accès dès l&apos;ouverture, au tarif fondateur.
        </p>
        <p className="mt-3 text-sm text-encre/70">
          Sans engagement. Résiliable à tout moment.
        </p>
      </section>

           <footer className="mt-14 border-t border-encre/20 pt-6 text-sm text-encre/70">
        <p>Relance</p>
        <nav className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          <a href="/mentions-legales" className="underline">
            Mentions légales
          </a>
          <a href="/cgv" className="underline">
            CGV
          </a>
          <a href="/confidentialite" className="underline">
            Confidentialité
          </a>
        </nav>
      </footer>

      <div className="fixed inset-x-0 bottom-0 border-t border-encre/20 bg-papier p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:hidden">
        <a
          href={LIEN_PAIEMENT}
          className="flex w-full items-center justify-center rounded-md bg-rouille px-6 py-4 text-lg font-semibold text-papier"
        >
          Réserver mon accès : 35 € par mois
        </a>
      </div>
    </main>
  );
}
