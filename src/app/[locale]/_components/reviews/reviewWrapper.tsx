import React from "react";
import { useTranslations } from "next-intl";

import { Flex, Text, Box, Heading } from "@radix-ui/themes";

import style from './reviews.module.css'


export default function ReviewWrapper() {

    const t = useTranslations("Reviews")

    return(
        <Flex id='Reviews' direction='column' justify='center' align='center'>
            <Flex  justify='center'><Heading>{t("heading")}</Heading></Flex>
            <Box width='100vw' className={style.backgroundWrapper} pt='5' pb='5' mt='5' mb='5'>

                <Flex direction='column'>
                    <Flex justify='start' >
                        
                        <Flex className={style.reviewBox} p='6' width='40vw' >
                            <Text size='4'>{t("list.one")}</Text>
                        </Flex>
                    </Flex>
                    <Flex justify='end' >
                        
                        <Flex className={style.reviewBox} p='6' width='40vw' >
                            <Text size='4'>{t("list.two")}</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}