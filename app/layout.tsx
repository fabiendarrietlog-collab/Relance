import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const titre = Fraunces({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-titre",
  display: "swap",
});

const texte = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-texte",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relance : vos devis sans réponse se relancent tout seuls",
  description:
    "Un devis jamais relancé est un devis perdu. Relance l'écrit, l'envoie et vous prévient quand il est ouvert.",
  openGraph: {
    title: "Vos devis sans réponse se relancent tout seuls.",
    description:
      "Un devis jamais relancé est un devis perdu. Relance l'écrit, l'envoie et vous prévient quand il est ouvert.",
    locale: "fr_FR",
    type: "website",
    siteName: "Relance",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F1E7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
            <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
