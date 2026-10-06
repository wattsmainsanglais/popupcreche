'use client'

import { useState } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

import { FaArrowsRotate } from "react-icons/fa6";

// Same fanned-out rotating gallery as Slider, tuned for landscape (3:2) photos:
// the centre photo is much wider and the outer photos bleed off the screen edges.
// The stage is sized from the photo itself, so there's no empty space and the
// rotate button sits right under the photos.
const IMAGE_WIDTH = 'min(760px, 88vw)'


export default function LandscapeSlider({images, alt}: {images: StaticImageData[], alt: string}) {

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => prevIndexes.map((prevIndex) => (prevIndex + 1) % 5));
    };

    const positions = ["center", "left1", "left", "right", "right1"];

    // x offsets are a % of the photo's own width
    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-62%", scale: 0.82, zIndex: 3 },
        left: { x: "-112%", scale: 0.66, zIndex: 2 },
        right: { x: "112%", scale: 0.66, zIndex: 1 },
        right1: { x: "62%", scale: 0.82, zIndex: 3 },
    }

    return(
        <section className="w-full overflow-x-clip py-10 md:py-16">
            <div className="relative mx-auto aspect-3/2" style={{ width: IMAGE_WIDTH }}>
                {images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial='center'
                      animate={positions[positionIndexes[index]]}
                      variants={imageVariants}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                        <Image
                         src={image}
                         title={alt}
                         alt={alt}
                         placeholder="blur"
                         sizes="(max-width: 768px) 88vw, 760px"
                         className="h-full w-full object-cover shadow-md"
                          />
                    </motion.div>
                ))}
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
