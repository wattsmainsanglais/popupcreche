
import Image from "next/image";

import { Flex, Heading } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

import logo from '../../../../../public/images/Logo-final-wo-central.jpg'

export default function Splash(){

    const t = useTranslations("Splash")
    return(

        <Flex width='99vw' mt='4' mb='9' justify='center' align='center' direction='column'>

            <Image
            src={logo}
            width={500}
            alt='The Pop-Up Wedding Creche Logo'
            >


            </Image>

            <Heading size='5'>
            {t("heading")}
            </Heading>

            


        </Flex>
    )
}