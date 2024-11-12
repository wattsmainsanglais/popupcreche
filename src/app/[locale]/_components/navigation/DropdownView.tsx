'use client'

import Link from 'next/link';

import { Flex, Box, Text, TabNav , DropdownMenu, Button, Strong} from "@radix-ui/themes";
7
import { RxHamburgerMenu } from 'react-icons/rx';




export default function DropdownView({navList}: {navList: string[]}){

    return (
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
    )
}