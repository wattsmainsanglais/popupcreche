'use client'

import React, { useState } from "react";
import {motion} from 'framer-motion'
import { Flex, Text, Box} from "@radix-ui/themes";

import { useTranslations } from "next-intl";
import { tr } from "framer-motion/m";

export default function Faq({tprops}){


const [hovered, setHovered]  =React.useState(false)

 const[q1, setq1] = React.useState(tprops.q1)
 const[a1, seta1] = React.useState(tprops.a1)

 function HoverHandle(){
    setHovered(!hovered)
 }

    return (

        <Flex width='99vw' mt='9' mb='9'>
            
            <motion.div
             
             initial={{x: -200}}
             whileHover={{x: 150}}
            >
            <Box width='45vw' p='5' onMouseEnter={HoverHandle} onMouseLeave={HoverHandle} style={{backgroundColor: '#bbdad2', borderRadius: '10px'}} >
              
                 {hovered? <Text>{a1}</Text>:<Flex justify='end'><Text align='right'>{q1}</Text></Flex>}
            </Box>


            </motion.div>

        </Flex>


    )
}