import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import '@radix-ui/themes/styles.css';
// Radix UI themes
import { Theme} from '@radix-ui/themes'

import NavBar from "./_components/navigation/navBar";
import Footer from "./_components/footer/Footer";
import { Responsive } from "@radix-ui/themes/props";

//global css

export const ResponsiveTextSizes: Responsive<T> = {initial:'3', xs: '3', sm: '3', md: '4', lg: '4', xl: '5'}
export const ResponsiveHeadingSizes: Responsive<T> = {initial:'3', xs: '3', sm: '3', md: '4', lg: '5', xl: '5'}



export const metadata: Metadata = {
  title: "The Pop-up Wedding Crèche",
  description: "Homepage for 'The Pop-up Wedding Crèche'",
};

export default function RootLayout({
  children, params: {locale}
}:{
  children: React.ReactNode, params: {locale: string};
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
       <body >
       <Theme data-is-root-theme='false' accentColor='gray' grayColor='mauve' scaling='100%' panelBackground='translucent' >
       <NavBar locale={locale} />
        {children}
       <Footer />
       </Theme>
      </body>

     
    </html>
  );
}
