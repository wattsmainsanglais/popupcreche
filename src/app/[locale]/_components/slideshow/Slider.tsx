'use client'

import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Flex, Box } from "@radix-ui/themes";

import Image from "next/image";

import style from './slider.module.css'
import { StaticImageData } from "next/image";

import { FaArrowsRotate } from "react-icons/fa6";


export default function Slider({images, ratios, heightRatio}: {images: StaticImageData[], ratios: number[], heightRatio: number[] | string | number}) {


  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    if (typeof window !== 'undefined'){
      const {innerWidth}: {innerWidth: number} = window;
      return {innerWidth};
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
  
  const altHeightRatio: string | number = (heightRatio-15).toString()+'vh'
 


const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };


    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: ratios[0], zIndex: 5 },
        left1: { x: "-50%", scale: ratios[1], zIndex: 3 },
        left: { x: "-90%", scale: ratios[2], zIndex: 2 },
        right: { x: "90%", scale: ratios[2], zIndex: 1 },
        right1: { x: "50%", scale: ratios[1], zIndex: 3 },
    }
    
    return(
      <>
        <Box width='99vw'>
        <Flex width='100vw' height={windowSize?.innerWidth < 1024 ? altHeightRatio:  heightRatio.toString()+'vh'}  justify='center' direction='column' align='center' gap='5'>
            <Flex justify='center' align='center'>

                {images.map((image: string | StaticImageData, index: any) => (
                    <motion.div
                      key={index}
                      initial='center'
                      animate={positions[positionIndexes[index]]}
                      variants={imageVariants}
                      transition={{ duration: 0.5 }}
                      style={{ width: "40%", position: "absolute", display: 'flex', justifyContent: 'center'  }}

                    >

                        <Image
                         src={image}
                         alt='image'
                         width={380}
                         sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                          />

                    </motion.div>
                ))}

            </Flex>
        
         </Flex> 
         <Flex width='99vw' mt={{initial: '0', xs: '0', sm:'0', md: '3'}} justify='center'>
              
             <motion.button
              style={{backgroundColor: 'none', border: 'none'}}
              whileTap={{rotateZ: 45}}>
              

              <FaArrowsRotate onClick={handleNext} fontSize={24} />
             </motion.button>
              
            

            </Flex>
            </Box>
        </>
    )

};

