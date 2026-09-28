import type { Metadata } from "next";
import { StaticImageData } from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Splash from "./_components/splash/Splash";
import Whatwedo from "./_components/whatwedo/WhatWeDo";
import Services from "./_components/services/Services";
import Meetus from "./_components/meet/MeetUs";
import Slider from "./_components/slideshow/Slider"
import LandscapeSlider from "./_components/slideshow/LandscapeSlider"
import ReviewWrapper from "./_components/reviews/reviewWrapper";
import FaqWrapper from "./_components/faq/FaqWrapper";
import ContactWrapper from "./_components/contact/ContactWrapper";
import GoTop from "./_components/buttons/GoTopButton";

import {markerArray} from './_components/map/data/markerData'

//slide 1 imports
import s1 from '../../../public/slide1/Hanna_David_Wedding_0163_websize.jpg'
import s2 from '../../../public/slide1/michael_mannphotography.jpg'
import s3 from '../../../public/slide1/Hanna_David_Wedding_0401_websize.jpg'
import s5 from '../../../public/slide1/Hanna_David_Wedding_1042_websize.jpg'
import s6 from '../../../public/slide1/4 michael_mannphotography.jpg'

//slide2 imports
// Sinead asked (Sept 2026) to replace the photos of her and Harriet in dungarees with the new château shoot.
// The rocking horse photo has neither of them in it, so it stays as the 5th (the gallery needs exactly 5).
// import s7 from '../../../public/slide2/KL2_7337.jpg'
import s8 from '../../../public/slide2/KL2_7395.jpg'
// import s9 from '../../../public/slide2/KL2_7400.jpg'
// import s10 from '../../../public/slide2/KL2_7813.jpg'
// import s11 from '../../../public/slide2/KL2_7859.jpg'
import n1 from '../../../public/images/1E0A5626.jpg'
import n2 from '../../../public/images/1E0A5593.jpg'
import n3 from '../../../public/images/1E0A5641.jpg'
import n4 from '../../../public/images/1E0A5617.jpg'

// Map: two interchangeable versions. LeafletMapWrapper (free, no API key) is live;
// to switch back to Google Maps, swap the two <...MapWrapper> lines in the JSX below.
import MapWrapper from "./_components/map/MapWrapper";
import LeafletMapWrapper from "./_components/map/LeafletMapWrapper";

const apiKey: string | undefined = process.env.NEXT_PUBLIC_GOOGLEMAPAPI
const mapId: string | undefined = process.env.GOOGLEMAPID

const baseUrl = 'https://www.thepopupweddingcreche.fr'

const keywords = [
  // English
  'wedding creche France', 'wedding nanny France', 'wedding childcare France',
  'destination wedding childcare France', 'wedding childcare Dordogne',
  'wedding childcare Charente', 'wedding childcare Gironde', 'holiday nanny France',
  'English speaking nanny France', 'event childcare South West France',
  // French
  "garde d'enfants mariage", 'crèche mariage', 'nounou mariage',
  'baby-sitting mariage Dordogne', "garde d'enfants mariage Charente",
  "garde d'enfants mariage Gironde", 'nounou anglophone vacances',
]

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords,
    authors: [{ name: 'The Pop-up Wedding Crèche' }],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `${baseUrl}/${locale}`,
      siteName: 'The Pop-up Wedding Crèche',
      locale: locale === 'fr' ? 'fr_FR' : 'en_GB',
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: t('ogAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/og-image.jpg'],
    },
  }
}


export default async function Home({ params }: PageProps<'/[locale]'>) {

  const { locale } = await params;
  setRequestLocale(locale);

  const tMeta = await getTranslations('Metadata')
  const tServices = await getTranslations('Services.Headings')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    name: 'The Pop-up Wedding Crèche',
    description: tMeta('description'),
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}/og-image.jpg`,
    email: 'thepopupweddingcreche@gmail.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Nouvelle-Aquitaine',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Dordogne' },
      { '@type': 'AdministrativeArea', name: 'Charente' },
      { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
      { '@type': 'Country', name: 'France' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Childcare services',
      itemListElement: [tServices('cn'), tServices('wc'), tServices('pn')].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    sameAs: [
      'https://www.facebook.com/popupweddingcreche',
      'https://www.instagram.com/popupweddingcreche/',
    ],
  }

  const portrait: number[] = [.9 , .7 , .5]

  const images: StaticImageData[]= [s1, s2, s3, s5, s6]
  const images2: StaticImageData[]= [n1, n2, n3, s8, n4]
  const images2Credits: string[] = ['Lydia Taylor Photography', 'Lydia Taylor Photography', 'Lydia Taylor Photography', 'Katy Lunsford Photography', 'Lydia Taylor Photography']

  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Splash />
      <Whatwedo />
      <Services />
      <LandscapeSlider images={images} alt='Michael Mann Photography' />
      <Meetus />
      <ReviewWrapper />
      <FaqWrapper />
      {/* <MapWrapper apiKey={apiKey} mapId={mapId} markerArray={markerArray}/> */}
      <LeafletMapWrapper markerArray={markerArray} />
      <Slider images={images2} ratios={portrait} alt={images2Credits}/>
      <ContactWrapper />
      <GoTop/>
    </main>
  );
}
