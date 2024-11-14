'use client'

import Link from 'next/link';

import { Flex, Box, Text, TabNav , DropdownMenu, Button, Strong} from "@radix-ui/themes";

import { RxHamburgerMenu } from 'react-icons/rx';
import { NavList } from './navBar';



export default function DropdownView({navList}: {navList: NavList[]}){

    return (
        <DropdownMenu.Root modal={false} >
            <DropdownMenu.Trigger>
                <Button variant="surface">
            
                    <RxHamburgerMenu size={30} />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content side='bottom'>
            
                {navList.map((i, index) => (
                    <Link key={index} href={`#${i.id}`}><DropdownMenu.Item><Text size='3'><Strong>{i.title}</Strong></Text></DropdownMenu.Item></Link>
                ))}
        
            </DropdownMenu.Content>
    </DropdownMenu.Root>
    )
}