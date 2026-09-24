import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import "./globals.css";

import NavBar from "./_components/navigation/navBar";
import Footer from "./_components/footer/Footer";
import { routing } from "@/i18n/routing";

const cormorant = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "The Pop-up Wedding Crèche",
  description: "Homepage for 'The Pop-up Wedding Crèche'",
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
    <html lang={locale} className={`${cormorant.variable} ${nunito.variable}`}>
      <body>
        <NavBar locale={locale} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
