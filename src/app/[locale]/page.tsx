import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "./page.module.css";


import { Suspense } from 'react'

import { Flex, Skeleton } from "@radix-ui/themes";

import Splash from "./_components/splash/Splash";
import Whatwedo from "./_components/whatwedo/WhatWeDo";
import Services from "./_components/services/Services";
import Meetus from "./_components/meet/MeetUs";
import Slider from "./_components/slideshow/Slider"
import ReviewWrapper from "./_components/reviews/reviewWrapper";
import FaqWrapper from "./_components/faq/FaqWrapper";
import ContactWrapper from "./_components/contact/ContactWrapper";
import ComponentSeperator from "./_components/ComponentSeperator";
import GMap from "./_components/map/GMap";
import DeckMap from "./_components/map/DeckMap";
import GoTop from "./_components/buttons/GoTopButton";

import {markerArray} from './_components/map/data/markerData'
import { markerTypes } from "./_components/map/data/markerData";

//slide 1 imports
import s1 from '../../../public/slide1/Hanna_David_Wedding_0163_websize.jpg'
import s2 from '../../../public/slide1/michael_mannphotography.jpg'
import s3 from '../../../public/slide1/Hanna_David_Wedding_0401_websize.jpg'
import s4 from '../../../public/slide1/harriet-playing.jpg'
import s5 from '../../../public/slide1/Hanna_David_Wedding_1042_websize.jpg'
import s6 from '../../../public/slide1/4 michael_mannphotography.jpg'

//slide2 imports

import s7 from '../../../public/slide2/KL2_7489web.jpg'
import s8 from '../../../public/slide2/KL2_8447web.jpg'
import s9 from '../../../public/slide2/KL2_8729web.jpg'
import s10 from '../../../public/slide2/KL2_8763web.jpg'
import s11 from '../../../public/slide2/KL2_8765web.jpg'

const apiKey: string | undefined = process.env.NEXT_PUBLIC_GOOGLEMAPAPI
const mapId: string | undefined = process.env.GOOGLEMAPID


export default function Home() {

  const landscape: number[] = [.95 , .85, .7]
  const portrait: number[] = [.9 , .7 , .5]
  const heightRatio: number[] | string = [90, 65]

  const images: StaticImageData[]= [s1, s2, s3, s5, s6]
  const images2: StaticImageData[]= [s7, s8, s9, s10, s11]

  return (
    <Flex justify='center' direction='column' align='center'>
      
      <Splash />
   
    
      <ComponentSeperator>
        <Whatwedo />
      </ComponentSeperator>  

      <ComponentSeperator>
        <Services />
      </ComponentSeperator>

       
      <ComponentSeperator>
        <Suspense fallback={<Skeleton />} >
           <Slider images={images} ratios={landscape} heightRatio={heightRatio[1]} />
        </Suspense>
      </ComponentSeperator>  
      
      <ComponentSeperator>
        <Meetus />
      </ComponentSeperator>
     
      
      <ComponentSeperator>
        <ReviewWrapper />
      
      </ComponentSeperator>  
      
      <ComponentSeperator>
        <FaqWrapper  />
      </ComponentSeperator> 

      
     <ComponentSeperator>
        <GMap apiKey={apiKey} mapId={mapId} markerArray={markerArray}/>
     </ComponentSeperator>
     

      <ComponentSeperator>
        <Slider images={images2} ratios={portrait} heightRatio={heightRatio[0]}/>
      </ComponentSeperator>  
      
      <ComponentSeperator>
        <ContactWrapper />
      </ComponentSeperator>

      <GoTop/>
      


    </Flex>
  );
}
