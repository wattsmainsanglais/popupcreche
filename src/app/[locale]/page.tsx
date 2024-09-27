import Image from "next/image";
import styles from "./page.module.css";

import { Flex } from "@radix-ui/themes";

import Splash from "./_components/splash/Splash";
import Whatwedo from "./_components/whatwedo/WhatWeDo";
import Meetus from "./_components/meet/MeetUs";



export default function Home() {
  return (
    <Flex justify='center' direction='column'>

      <Splash />
      <Whatwedo />
      <Meetus />


    </Flex>
  );
}
