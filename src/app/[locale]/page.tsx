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


export default async function Home({ params }: PageProps<'/[locale]'>) {

  const { locale } = await params;
  setRequestLocale(locale);

  const portrait: number[] = [.9 , .7 , .5]

  const images: StaticImageData[]= [s1, s2, s3, s5, s6]
  const images2: StaticImageData[]= [n1, n2, n3, s8, n4]
  const images2Credits: string[] = ['Lydia Taylor Photography', 'Lydia Taylor Photography', 'Lydia Taylor Photography', 'Katy Lunsford Photography', 'Lydia Taylor Photography']

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
      <Slider images={images2} ratios={portrait} alt={images2Credits}/>
      <ContactWrapper />
      <GoTop/>
    </main>
  );
}
