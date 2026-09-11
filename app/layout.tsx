import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clicair.com.br"),
  title: "Clic Air | Climatização e Reformas",
  description: "Soluções completas em climatização, manutenção predial e reformas para residências e empresas.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Clic Air",
    title: "Clic Air | Climatização e Reformas",
    description: "Soluções completas em climatização, manutenção predial e reformas para residências e empresas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"><body>{children}</body></html>
  );
}
