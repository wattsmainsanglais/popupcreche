import { Tabs, Flex, Box, Text, Heading } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

import cn from '../../../../../public/services/cn.jpg'
import pn from '../../../../../public/services/pn.jpg'
import wc from '../../../../../public/services/wc.jpg'

import { ResponsiveHeadingSizes, ResponsiveTextSizes } from "../../layout";


export default function Services(){

    const t = useTranslations("Services")
    return (
        <Flex width='90vw' justify='center' direction='column'>
            <Flex justify='center' pb='8'>
                  <Heading size={ResponsiveHeadingSizes} >
                    Services
                </Heading>
            </Flex>
            <Flex justify='center'>
            <Tabs.Root defaultValue="cn" >
                <Flex justify='center' pb='3' width={{initial: '95vw', xs: '95vw', sm: '95vw', md: '90vw', lg: '75vw'}} >
                <Tabs.List>
                    <Flex  gap={{initial: '3', xs: '3', sm: '3', md: '5', lg: '9'}} justify='center'>
                        <Flex direction='column' justify='center' align='center'>
                            <Image
                            style={{
                                maxWidth: '10%',
                                height: 'auto'
                            }}
                            alt='The Pop-up Wedding Creche - Ceremony Nanny'
                            src={cn}
                            />
                            <Tabs.Trigger value="cn">
                                <Text size={ResponsiveHeadingSizes}>{t("Headings.cn")}</Text>
                            </Tabs.Trigger>
                        </Flex>
                    
                    
                        <Flex direction='column' justify='end' align='center'>
                            <Image
                            src={pn}
                            style={{
                                maxWidth: '10%',
                                height: 'auto'
                            }}
                            alt='The Pop-up Wedding Creche - Private Nanny'
                            
                            />
                            <Tabs.Trigger value="pn">
                                <Text size={ResponsiveTextSizes}>{t("Headings.pn")}</Text>
                            </Tabs.Trigger>
                        </Flex>

                   
                    
                        <Flex direction='column' align='center'>
                            <Image
                            style={{
                                maxWidth: '10%',
                                height: 'auto'
                            }}
                            alt='The Pop-up Wedding Creche - Wedding Creche'
                            src={wc}
                            />
                            <Tabs.Trigger value="wc">
                                <Text size={ResponsiveHeadingSizes}>{t("Headings.wc")}</Text>
                            </Tabs.Trigger> 
                        </Flex>
                    </Flex>
                </Tabs.List>
                </Flex>
                <Flex justify='center' width='75vw' pt='4'>
                    <Tabs.Content value="cn">
                        <Text size={ResponsiveTextSizes}>{t("Content.cnc")}</Text>
                    </Tabs.Content>

                    <Tabs.Content value="pn">
                        <Text size={ResponsiveTextSizes}>{t("Content.pnc")}</Text>
                    </Tabs.Content>

                    <Tabs.Content value="wc">
                        <Text size={ResponsiveTextSizes}>{t("Content.wcc")}</Text>
                    </Tabs.Content>
                </Flex>
            </Tabs.Root>
            </Flex>
        </Flex>
    )
}