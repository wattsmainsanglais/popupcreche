

import React from "react";

import Link from "next/link";
import Image from "next/image";

import { Box, Flex, Text, DropdownMenu, Button } from "@radix-ui/themes";


import style from './footer.module.css'


import { Genos, Indie_Flower } from "next/font/google";


import logoMid from "../../../../../public/images/Logo-final-wo-central.jpg"

const genos = Genos({weight: ["500"] , subsets: ['latin']}) 

const indie = Indie_Flower({
    weight: ['400'],
    subsets: ['latin'],
    
    
  })

export default function Footer(){



    return (
    
    <Box width='99vw' height='30vh' pt='9' pb='9' className={style.footerWrapper}  >


        
        <Flex justify='center' align='end' pr='3' >
            <Image
                src={logoMid}
                alt='Nature dopes logo'
                width= {100}
                height={100}

            
            />
            
        </Flex>

        <Flex justify='center'>
            <Text>Powered By <Link href='https://www.awattsdev.eu' target="_blank"><Text className={` ${genos.className} ${style.wattsLink}`}> awattsdev</Text></Link></Text >
        </Flex>

        <Flex justify='start' pb='5'>

        <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger>
                <Button variant='ghost'>
                <Text>Photo & Art Credits</Text>
                <DropdownMenu.TriggerIcon />
                </Button>
            </DropdownMenu.Trigger>
            
            <DropdownMenu.Content side='top'>
                <DropdownMenu.Item><Text >Katy Lunsford Photography</Text></DropdownMenu.Item>
                <DropdownMenu.Item><Text >Anneli Marinovich Photography</Text></DropdownMenu.Item>
                <DropdownMenu.Item><Text >Michael Mann Photography</Text></DropdownMenu.Item>
                <DropdownMenu.Item><Text >Logo by Aquaroline</Text></DropdownMenu.Item>
            </DropdownMenu.Content>
            
        </DropdownMenu.Root>

        </Flex>
       
    


    </Box>
   
  
    )
}