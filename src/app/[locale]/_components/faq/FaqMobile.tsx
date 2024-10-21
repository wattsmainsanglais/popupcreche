'use client'

import { Flex, Text, Heading } from "@radix-ui/themes"

import Image from "next/image"

import { motion } from "framer-motion"

import FaqBox from "./FaqBox"

export default function FaqMobile({tprops}){

    const win = window.innerWidth

    return (
    <Flex id='FAQ-Mobile' width='99vw' direction='column' justify='center' align='center' gap='1' display={win < 1080? 'flex': 'none'} >
            <Heading mb='1'>FAQ</Heading>
            {tprops.map((item, index) => (
                
                <motion.div
                key={index}
               
                whileInView={{x: 0}}>
                   <Flex align='center'>
                    <Image src={item.i} width={75} alt='Toy truck' />
                    <FaqBox question={item.q} answer={item.a} color='#bbdad2' justify='end' />
                    
                   </Flex>
                    
                </motion.div>  
      
            ))}

            
        </Flex>
)}