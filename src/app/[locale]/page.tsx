import { StaticImageData } from "next/image";
import { setRequestLocale } from "next-intl/server";

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

import s7 from '../../../public/slide2/KL2_7337.jpg'
import s8 from '../../../public/slide2/KL2_7395.jpg'
import s9 from '../../../public/slide2/KL2_7400.jpg'
import s10 from '../../../public/slide2/KL2_7813.jpg'
import s11 from '../../../public/slide2/KL2_7859.jpg'
// Map: two interchangeable versions. LeafletMapWrapper (free, no API key) is live;
// to switch back to Google Maps, swap the two <...MapWrapper> lines in the JSX below.
import MapWrapper from "./_components/map/MapWrapper";
import LeafletMapWrapper from "./_components/map/LeafletMapWrapper";

const apiKey: string | undefined = process.env.NEXT_PUBLIC_GOOGLEMAPAPI
const mapId: string | undefined = process.env.GOOGLEMAPID


export default async function Home({ params }: PageProps<'/[locale]'>) {

  const { locale } = await params;
  setRequestLocale(locale);

  const portrait: number[] = [.9 , .7 , .5]

  const images: StaticImageData[]= [s1, s2, s3, s5, s6]
  const images2: StaticImageData[]= [s7, s8, s9, s10, s11]

  return (
    <main id="top">
      <Splash />
      <Whatwedo />
      <Services />
      <LandscapeSlider images={images} alt='Michael Mann Photography' />
      <Meetus />
      <ReviewWrapper />
      <FaqWrapper />
      {/* <MapWrapper apiKey={apiKey} mapId={mapId} markerArray={markerArray}/> */}
      <LeafletMapWrapper markerArray={markerArray} />
      <Slider images={images2} ratios={portrait} alt='Katy Lunsford Photography'/>
      <ContactWrapper />
      <GoTop/>
    </main>
  );
}
