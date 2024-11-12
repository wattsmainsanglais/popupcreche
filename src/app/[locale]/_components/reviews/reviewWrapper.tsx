import React from "react";
import { useTranslations } from "next-intl";

import { Flex, Text, Box, Heading } from "@radix-ui/themes";

import style from './reviews.module.css'


export default function ReviewWrapper() {

    const t = useTranslations("Reviews")

    return(
        <Flex id='Reviews' direction='column' justify='center' align='center' width='100vw'>
            <Flex  justify='center'><Heading>{t("heading")}</Heading></Flex>
            <Box width='100vw' height='100vh' className={style.backgroundWrapper} pt='5' pb='5' mt='5' mb='5'>
                
                <Flex direction='column'  width='100vw' height='80vh' justify={{initial: 'between', xs: 'between', sm: 'between', md: 'start'}}>
                    <Flex justify='start' >
                        
                        <Flex className={style.reviewBox} p='6' width={{initial: '80vw', xs: '80vw', sm: '80vw', md: '40vw'}} >
                            <Text size='4'>{t("list.one")}</Text>
                        </Flex>
                    </Flex>
                    <Flex justify='end' >
                        
                        <Flex className={style.reviewBox} p='6' width={{initial: '80vw', xs: '80vw', sm: '80vw', md: '40vw'}} >
                            <Text size='4'>{t("list.two")}</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}