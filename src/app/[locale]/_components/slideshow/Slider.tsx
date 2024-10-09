'use client'

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Flex, Box } from "@radix-ui/themes";

import Image from "next/image";

import style from './slider.module.css'
import { StaticImageData } from "next/image";

import { FaArrowsRotate } from "react-icons/fa6";








export default function Slider({images}: {images: StaticImageData}) {

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
        center: { x: "0%", scale: 0.9, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
    }
    
    return(
      <>
        <Box width='99vw'>
        <Flex width='100vw' height='90vh'  justify='center' direction='column' align='center' gap='5'>
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
                         width={400}
                          />

                    </motion.div>
                ))}

            </Flex>
        
         </Flex> 
         <Flex width='99vw' mt='3' justify='center'>
              
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

