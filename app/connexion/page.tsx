"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [etat, setEtat] = useState<"attente" | "envoi" | "envoye" | "erreur">(
    "attente"
  );

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat("envoi");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setEtat(error ? "erreur" : "envoye");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 py-10 font-texte">
      <p className="text-sm font-semibold uppercase tracking-widest text-rouille">
        Relance
      </p>
      <h1 className="mt-4 font-titre text-3xl font-extrabold leading-tight">
        Connexion
      </h1>

      {etat === "envoye" ? (
        <div className="mt-6">
          <p className="text-lg">
            C&apos;est envoyé. Ouvrez l&apos;email reçu à{" "}
            <strong>{email}</strong> et appuyez sur le lien.
          </p>
          <p className="mt-3 text-sm text-encre/70">
            Rien après une minute ? Regardez dans les courriers indésirables.
            Ouvrez le lien sur le même appareil et le même navigateur que
            celui-ci.
          </p>
        </div>
      ) : (
        <form onSubmit={envoyer} className="mt-6">
          <label htmlFor="email" className="block font-semibold">
            Votre adresse email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-md border border-encre/30 bg-white px-4 py-4 text-lg"
          />
          <button
            type="submit"
            disabled={etat === "envoi"}
            className="mt-4 flex w-full items-center justify-center rounded-md bg-rouille px-6 py-4 text-lg font-semibold text-papier disabled:opacity-60"
          >
            {etat === "envoi" ? "Envoi en cours..." : "Recevoir mon lien"}
          </button>
          {etat === "erreur" && (
            <p className="mt-3 text-rouille">
              L&apos;envoi a échoué. Vérifiez l&apos;adresse et réessayez dans
              quelques minutes.
            </p>
          )}
        </form>
      )}

      <a href="/" className="mt-8 text-sm font-semibold text-rouille">
        &larr; Retour à l&apos;accueil
      </a>
    </main>
  );
}
