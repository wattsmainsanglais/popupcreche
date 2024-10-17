import React from "react";

import { Flex, Box, Text, TabNav } from "@radix-ui/themes";

import Image from "next/image";
import miniLogo from '../../../../../public/images/bunny-good.png'

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LangSwitcher";




export default function NavBar({locale}: {locale: string}){

    const t = useTranslations("Nav.Links")
    
    const navList: string[] = [t("what"), t("meet"), t("reviews"), t("faq"), t("contact")];

    return (
    <Flex justify='between' align='center' width='100vw' top='0' position='sticky' style={{backgroundColor: 'white'}}>
        <Flex justify='start' pl='2'>

            <Image
                src={miniLogo}
                width={60}
                alt='ThePopUpWeddingCreche Logo'>
            </Image>

        </Flex>
        <Flex justify='center' gap='5' width='60vw'>
          <TabNav.Root size='2'>
          {navList.map((item, index) => (
            <TabNav.Link key={index} href={`#${item}`}><Text size='4'>{item}</Text></TabNav.Link>
          ))}
          </TabNav.Root>
        </Flex>
        <Flex width='10vw' mr='5' justify='end'>
          <LanguageSwitcher locale={locale} />

        </Flex>
    </Flex>
    )
}