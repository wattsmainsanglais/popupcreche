
import {useEffect, useState} from 'react';

import { Flex, Box, Text, TabNav } from "@radix-ui/themes";

import Image from "next/image";
import miniLogo from '../../../../../public/images/bunny-good.png'

import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from "./LangSwitcher";

import NavItemsResponsive from './NavItemsResponsive';


export interface NavList  {
        title: string,
        id: string
       } 
    

export default async function NavBar({locale}: {locale: string}){

    const t = await getTranslations("Nav.Links")
    
    const navList: NavList[] = [{title: t("what"), id: 'What-we-do'}, {title: t("meet"), id: 'Meet-us'}, {title: t("reviews"), id: 'Reviews'}, {title: t("faq"), id: 'faq'}, {title: t("contact"), id: 'Contact-us'}, {title: t("map"), id: 'Map'}];

    return (
    <Flex justify='between' align='center' width='100vw' top='0'  style={{backgroundColor: 'white'}}>
        <Flex justify='start' pl='2'>

            <Image
                src={miniLogo}
                width={60}
                alt='ThePopUpWeddingCreche Logo'>
            </Image> 

        </Flex>
        <Flex justify={{initial:'end' ,xs: 'end', sm: 'end', md: 'end', lg: 'center'}} gap='5' width='60vw' >
           <NavItemsResponsive navList={navList}  />
        </Flex>
        <Flex width='10vw' ml='1' mr={{initial: '2', xs: '2', sm: '2', md: '5'}} justify='end'>
          <LanguageSwitcher locale={locale} />

        </Flex>
    </Flex>
    )
}