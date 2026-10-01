export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 py-10 font-texte">
      <p className="font-titre text-7xl font-extrabold text-rouille">404</p>
      <h1 className="mt-4 font-titre text-3xl font-extrabold leading-tight">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-3 text-lg">
        Le lien est peut-être incorrect. Revenez à l&apos;accueil pour
        retrouver Relance.
      </p>
      <a
        href="/"
        className="mt-8 flex w-full items-center justify-center rounded-md bg-rouille px-6 py-4 text-lg font-semibold text-papier"
      >
        Retour à l&apos;accueil
      </a>
    </main>
  );
}
