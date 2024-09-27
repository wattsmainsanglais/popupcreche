import React from "react";

import { Flex, Box, Text } from "@radix-ui/themes";

import Image from "next/image";
import miniLogo from '../../../../../public/images/Logo-final-wo-central.jpg'

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LangSwitcher";


export default function NavBar({locale}: {locale: string}){

    const t = useTranslations("Nav.Links")
    
    const navList: string[] = [t("what"), t("meet"), t("reviews"), t("faq"), t("contact")];

    return (
    <Flex justify='between' align='center' width='100vw'>
        <Flex justify='start'>

            <Image
                src={miniLogo}
                width={100}
                alt='ThePopUpWeddingCreche Logo'>
            </Image>

        </Flex>
        <Flex justify='center' gap='5' width='60vw'>
          {navList.map(item => (
            <Text>{item}</Text>
          ))}
        </Flex>
        <Flex width='10vw' mr='5' justify='end'>
          <LanguageSwitcher locale={locale} />

        </Flex>
    </Flex>
    )
}