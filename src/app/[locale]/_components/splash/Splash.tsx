
import Image from "next/image";

import { Flex, Heading } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

import logo from '../../../../../public/images/Logo-final-wo-central.jpg'

import { ResponsiveTextSizes, ResponsiveHeadingSizes } from "../../fonts/ResponsiveFontSizes";

export default function Splash(){

    const t = useTranslations("Splash")
    return(

        <Flex width='99vw' mt='4' mb='9' justify='center' align='center' direction='column'>

            <Image
            src={logo}
            alt='The Pop-Up Wedding Creche Logo'
            style={{
                maxWidth: '100%',
                height: 'auto'
            }}
            >


            </Image>

            <Heading size={ResponsiveHeadingSizes} align='center' mb='2'>
            {t("heading")}
            </Heading>
            <Heading size={ResponsiveHeadingSizes} align='center'>
            {t("heading1")}
            </Heading>
            

            


        </Flex>
    )
}