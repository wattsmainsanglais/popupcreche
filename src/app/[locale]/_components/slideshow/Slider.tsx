'use client'

import React from "react";
import { useState } from "react";
import { motion } from "motion/react";

import Image from "next/image";
import { StaticImageData } from "next/image";

import { FaArrowsRotate } from "react-icons/fa6";

// Rendered width of each photo (was 380px). Capped to the screen width so it still fits on phones.
const IMAGE_WIDTH = 540
const IMAGE_CSS_WIDTH = `min(${IMAGE_WIDTH}px, 97vw)`
// Photos are cropped to a uniform 2:3 so the fan lines up (source photos vary between 3:4 and 2:3)
const PHOTO_ASPECT = 1.5


// alt: one credit for all photos, or one per photo (same order as images)
export default function Slider({images, ratios, alt}: {images: StaticImageData[], ratios: number[], alt: string | string[]}) {


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
        <section className="relative w-full overflow-x-clip py-6 md:py-16">
            <div
              className="flex w-full flex-col items-center justify-center"
              // Stage is exactly as tall as the (scaled) centre photo, so the rotate button sits right under it
              style={{height: `calc(${IMAGE_CSS_WIDTH} * ${PHOTO_ASPECT} * ${ratios[0]})`}}>
                <div className="flex items-center justify-center">

                    {images.map((image: StaticImageData, index: number) => (
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
                             title={Array.isArray(alt) ? alt[index] : alt}
                             alt={Array.isArray(alt) ? alt[index] : alt}
                             width={IMAGE_WIDTH}
                             sizes="(max-width: 768px) 97vw, 540px"
                             style={{ maxWidth: 'none', width: IMAGE_CSS_WIDTH, height: 'auto', aspectRatio: '2 / 3', objectFit: 'cover' }}
                              />
                        </motion.div>
                    ))}

                </div>
            </div>
            <div className="mt-5 flex w-full justify-center">
                 <motion.button
                  type="button"
                  aria-label="Next photo"
                  onClick={handleNext}
                  className="bg-white p-2"
                  whileTap={{rotateZ: 45}}>
                  <FaArrowsRotate fontSize={24} />
                 </motion.button>
            </div>
        </section>
    )

};
