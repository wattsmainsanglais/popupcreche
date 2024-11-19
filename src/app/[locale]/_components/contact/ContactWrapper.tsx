import React from "react";

import { useTranslations } from "next-intl";

import { Flex, Box, Grid, Heading} from "@radix-ui/themes";

import ContactForm from "./ContactForm";
import Socials from "./Socials";
import { ResponsiveHeadingSizes } from "../../fonts/ResponsiveFontSizes";

export default function ContactWrapper(){

    const t = useTranslations("Contact")

    const trans: {[key: string]: string} = {
        heading: t('heading'),
        name: t('formfields.name'),
        email: t('formfields.email'),
        tele: t('formfields.tele'),
        msg: t('formfields.msg')

    }

    return(
        <Flex width='99vw' id='Contact-us' direction='column' justify='center' align='center'>
            <Heading size={ResponsiveHeadingSizes}>Contact</Heading>
           
            <Flex direction={{initial: 'column', xs: 'column', sm: 'column', md: 'row'}} width='99vw' justify='center' align='center'>
                <ContactForm trans={trans} />
                <Socials />

            </Flex>
        </Flex>
       
    )
}