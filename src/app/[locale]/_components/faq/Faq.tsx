'use client'

import React, { useState } from "react";
import {motion} from 'framer-motion'
import { Flex, Text, Box, Heading} from "@radix-ui/themes";

import FaqBox from "./FaqBox";

import Image from "next/image";
import truck from '../../../../../public/images/dino.png'

export default function Faq({tprops}){


    return (
        <>
        <Flex width='99vw' mt='9' mb='9' direction='column' justify='center' align='center' gap='0'>
            <Heading mb='1'>Faq</Heading>
            {tprops.map((item, index) => (
                index % 2 === 0 ? 
                <motion.div
                initial={{x: -550}}
                whileHover={{x: -300}}>
                   <Flex align='center'>
                    <Image src={item.i} width={75} alt='Toy truck' />
                    <FaqBox question={item.q} answer={item.a} color='#bbdad2' justify='end' />
                    
                   </Flex>
                    
                </motion.div>:  
                <motion.div
                initial={{x: 550}}
                whileHover={{x: 300}}
                >   
                    <Flex align='center'>

                        <FaqBox question={item.q} answer={item.a} color='pink' justify='start' />
                        <Image src={item.i} width={75} alt='Toy truck' />
                    </Flex>
                </motion.div>

            ))}

            
        </Flex>
        </>


    )
}