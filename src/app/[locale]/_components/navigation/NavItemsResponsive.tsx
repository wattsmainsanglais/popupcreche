'use client'
import {useEffect, useState} from 'react';


import TabView from './TabView';
import DropdownView from './DropdownView';
import { NavList } from './navBar';
import { Box } from '@radix-ui/themes';


export default function NavItemsResponsive({navList}: {navList: NavList[]}){

    
    return(
        <>
         <Box display={{initial: 'none', xs: 'none', sm: 'none', md: 'block', lg: 'block'}}>
            <TabView navList={navList} />
         </Box>
         <Box display={{initial: 'block', xs: 'block', sm: 'block', md: 'none', lg: 'none'}}>
            <DropdownView navList={navList} />
         </Box>
        
        </>
        
        
    )

}