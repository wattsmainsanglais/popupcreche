'use client'

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Flex } from "@radix-ui/themes";

import Image from "next/image";

import style from './slider.module.css'
import { StaticImport } from "next/dist/shared/lib/get-img-props";






export default function Slider({images}: {images: StaticImport}) {

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
       
        <Flex width='100vw' height='90vh' mb='5'  justify='center'>
            <Flex justify='center' align='center'>

                {images.map((image: string | StaticImport, index: any) => (
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
         <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Back
            </button> 
         
         </>
    )

};

