'use client'

import { Flex, Text, Heading } from "@radix-ui/themes"

import Image from "next/image"

import { motion } from "framer-motion"

import { useEffect, useState } from "react"

import FaqBox from "./FaqBox"

export default function FaqMobile({tprops}){


    return (
    <Flex id='FAQ-Mobile' width='99vw' direction='column' justify='center' align='center' gap='1'  >
            <Heading mb='1'>FAQ</Heading>
            {tprops.map((item, index) => (
                
                <motion.div
                key={index}
               
                whileInView={{x: 0}}>
                   <Flex align='center' justify='center' width={{initial:'90vw', xs: '90vw', sm: '90vw', md: '75vw', lg: '35vw' }}>
                    <Image src={item.i} width={75} alt='Toy truck' />
                    <FaqBox question={item.q} answer={item.a} color='#bbdad2' justify='center' />
                    
                   </Flex>
                    
                </motion.div>  
      
            ))}

            
        </Flex>
)}