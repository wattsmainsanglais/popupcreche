'use client'

import React, { useState, useEffect } from "react";
import {motion} from 'framer-motion'
import { Flex, Text, Box, Heading} from "@radix-ui/themes";

import FaqBox from "./FaqBox";

import Image from "next/image";
import truck from '../../../../../public/images/dino.png'

import { ResponsiveHeadingSizes } from "../../fonts/ResponsiveFontSizes";

export default function FaqDesktop({tprops}){


    return (
       <Box width='99vw' >
        
        <Flex id='FAQ' direction='column' justify='center' align='center' gap='1'>
            <Heading size={ResponsiveHeadingSizes}  mb='1'>FAQ</Heading>
            {tprops.map((item, index) => (
                index < 2 ? 
                <Flex  align='center' key={index}>
                <motion.div
               
                
                initial={{x: -400}}
                whileHover={{x: -300}}>
                  <Flex>
                    <Image src={item.i} width={75} alt='Toy truck' />
                    <FaqBox question={item.q} answer={item.a} color='#bbdad2' justify='end' />
                  </Flex> 
                 
                    
                </motion.div>
                </Flex>
                :  
                <Flex align='center' justify='center' key={index}>
                <motion.div
                
                
                initial={{x: 400}}
                whileHover={{x: 300}}
                >   
                    
                        <Flex>
                        <FaqBox question={item.q} answer={item.a} color='pink' justify='start' />
                        <Image src={item.i} width={75} alt='Toy truck' />
                        </Flex>
                </motion.div>
                </Flex>
            ))}

            
        </Flex>
       </Box>


    )
}