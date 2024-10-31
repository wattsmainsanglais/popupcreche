'use client'

import { Button, Text, Box } from "@radix-ui/themes";
import style from './topButton.module.css'

import { useState, useEffect } from "react";
import { useScroll, useAnimationControls , motion } from "framer-motion";


export default function GoTop(){

    const ScrollToTopContainerVariants= {
        hide: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0 },
    };

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.35) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
      <>
        <Box  position='fixed' left='95%' bottom='5%' style={{zIndex: '3'}}>
        
          <motion.div
          onClick={scrollToTop}
          variants={ScrollToTopContainerVariants}
          initial="hide"
          animate={controls}
          ><Button className={style.goTop} variant="soft">
         
            ^
            </Button>
          </motion.div>
            
        
        </Box>
      </>
    );
  };

  