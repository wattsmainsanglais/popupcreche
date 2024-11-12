'use client'

import React, { useState, useEffect } from "react";
import {motion} from 'framer-motion'
import { Flex, Text, Box, Heading} from "@radix-ui/themes";

import FaqBox from "./FaqBox";
import FaqDesktop from "./FaqDesktop";
import FaqMobile from "./FaqMobile";

import Image from "next/image";
import truck from '../../../../../public/images/dino.png'



export default function Faq({tprops}){

  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    if (typeof window !== 'undefined'){
      const {innerWidth}: {innerWidth: number} = window;
      return {innerWidth};
    } else { 
      return
    }
    
    }


  useEffect(() => {
  
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


    return (
     windowSize?.innerWidth <= 1024 ? <FaqMobile tprops={tprops} />: <FaqDesktop tprops={tprops} /> 


    )
}