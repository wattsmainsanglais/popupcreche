'use client'
import {useEffect, useState} from 'react';

import Link from 'next/link';

import { Flex, Box, Text, TabNav , DropdownMenu, Button, Strong} from "@radix-ui/themes";
7
import { RxHamburgerMenu } from 'react-icons/rx';

import Image from "next/image";
import miniLogo from '../../../../../public/images/bunny-good.png'





export default function NavItemsResponsive({navList}: {navList: string[]}){

const [windowSize, setWindowSize] = useState(getWindowSize());



  function getWindowSize() {
    const {innerWidth} = window;
    return {innerWidth};
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

    
    
    return(
        <>

        {windowSize.innerWidth > 1024 ? 
            <TabNav.Root size='2'>
                {navList.map((item, index) => (
                    <TabNav.Link key={index} href={`#${item}`}><Text size='4'>{item}</Text></TabNav.Link>
                ))}
                
            </TabNav.Root>
            :
            <DropdownMenu.Root modal={false} >
                <DropdownMenu.Trigger>
                <Button variant="surface">
            
                    <RxHamburgerMenu size={30} />
                </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content side='bottom'>
                
                {navList.map((i, index) => (
                    <Link key={index} href={`#${i}`}><DropdownMenu.Item><Text size='3'><Strong>{i}</Strong></Text></DropdownMenu.Item></Link>
                ))}
            
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        }




        </>
    )


}