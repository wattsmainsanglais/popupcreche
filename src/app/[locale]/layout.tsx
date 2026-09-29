import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nunito } from "next/font/google";
// import { Marck_Script } from "next/font/google";
// import { Cormorant_Garamond } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import "./globals.css";

import NavBar from "./_components/navigation/navBar";
import Footer from "./_components/footer/Footer";
import { routing } from "@/i18n/routing";

// Headings use Nunito (see --font-display in globals.css). Previous choices kept for easy switching back:
// const cormorant = Cormorant_Garamond({ weight: ["500", "600", "700"], subsets: ["latin"], variable: "--font-display-face" });
// const marck = Marck_Script({
//   weight: "400",
//   subsets: ["latin", "latin-ext"],
//   variable: "--font-display-face",
// });

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

// Title, description, canonical and hreflang are set per page (see page.tsx),
// so a canonical here can't cascade to other pages.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.thepopupweddingcreche.fr"),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children, params
}: LayoutProps<'/[locale]'>) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={nunito.variable}>
      <body>
        <NavBar locale={locale} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
