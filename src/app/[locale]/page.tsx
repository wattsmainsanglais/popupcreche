import Image from "next/image";
import styles from "./page.module.css";

import { Flex } from "@radix-ui/themes";

import Splash from "./_components/splash/Splash";
import Whatwedo from "./_components/whatwedo/WhatWeDo";
import Meetus from "./_components/meet/MeetUs";
import Slider from "./_components/slideshow/Slider"

import s1 from '../../../public/slide1/KL2_7291web.jpg'
import s2 from '../../../public/slide1/KL2_7633web.jpg'
import s3 from '../../../public/slide1/KL2_7921web.jpg'
import s4 from '../../../public/slide1/harriet-playing.jpg'
import s5 from '../../../public/slide1/holding-banner.jpg'
import s6 from '../../../public/slide1/sinead-playing.jpg'



export default function Home() {



  const images= [s1, s2, s3, s4, s5]

  return (
    <Flex justify='center' direction='column'>

      <Splash />
      <Whatwedo />
      <Meetus />
      <Slider images={images} />



    </Flex>
  );
}
