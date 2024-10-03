import Image from "next/image";


import { Flex, Heading, Text, Box} from "@radix-ui/themes";

import { useTranslations } from "next-intl";

import sinead from '../../../../../public/images/sinead-profile-alt.jpg'

import harriet from '../../../../../public/images/harriet-profile-alt.jpg'

import style from './meet.module.css'


export default function Meetus(){

    const t = useTranslations("Meet")

    return(

    <Flex direction='column' width='99vw' style={{backgroundColor: '#efe7e1'}}>

        <Box mt='5'>
            <Heading align='center'>
                {t("heading")}
            </Heading>
        </Box>

        <Flex justify='center' p='5'>

            <Image
                src={sinead}
                width={300}
                alt='Wedding creche Childcare and weddings in France'
                className={style.profile}
            />

            <Box p='9' width='60%'>
                <Text size='4'>
                    {t("sinead")}
                </Text>
            </Box>

        </Flex>
        <Flex justify='center' p='5'>
           
            <Box p='9' width='60%'>
                <Text size='4'>
                    {t("harriet")}
                </Text>
            </Box> 
            <Image 
                  src={harriet}
                  width={300}
                  alt='Wedding creche Childcare and weddings in France'
                  className={style.profile}
                  
            />
        </Flex>


    </Flex>
    )
}