import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Olivia Serres | Ostéopathe Bordeaux Caudéran",
  description:
    "Site web d'Olivia Serres, ostéopathe à Bordeaux Caudéran. Soulage les douleurs et améliore le bien-être. Adultes, bébés, femmes enceintes. Rendez-vous rapide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
