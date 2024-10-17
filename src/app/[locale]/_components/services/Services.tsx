import { Tabs, Flex, Box, Text, Heading } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

import cn from '../../../../../public/services/cn.jpg'
import pn from '../../../../../public/services/pn.jpg'
import wc from '../../../../../public/services/wc.jpg'


export default function Services(){

    const t = useTranslations("Services")
    return (
        <Flex width='90vw' justify='center' direction='column'>
            <Flex justify='center' pb='8'>
                  <Heading >
                Our Services
                </Heading>
            </Flex>
            <Flex justify='center'>
            <Tabs.Root defaultValue="cn" >
                <Flex justify='center' pb='3' width='75vw' >
                <Tabs.List>
                    <Flex  gap='9' justify='center'>
                        <Flex direction='column'>
                            <Image
                            width={160}
                            alt='The Pop-up Wedding Creche - Ceremony Nanny'
                            src={cn}
                            />
                            <Tabs.Trigger value="cn">
                                <Text size='4'>{t("Headings.cn")}</Text>
                            </Tabs.Trigger>
                        </Flex>
                    
                    
                        <Flex direction='column' justify='end'>
                            <Image
                            width={160}
                            alt='The Pop-up Wedding Creche - Private Nanny'
                            src={pn}
                            />
                            <Tabs.Trigger value="pn">
                                <Text size='4'>{t("Headings.pn")}</Text>
                            </Tabs.Trigger>
                        </Flex>

                   
                    
                        <Flex direction='column'>
                            <Image
                            width={160}
                            alt='The Pop-up Wedding Creche - Wedding Creche'
                            src={wc}
                            />
                            <Tabs.Trigger value="wc">
                                <Text size='4'>{t("Headings.wc")}</Text>
                            </Tabs.Trigger> 
                        </Flex>
                    </Flex>
                </Tabs.List>
                </Flex>
                <Flex justify='center' width='75vw' pt='4'>
                    <Tabs.Content value="cn">
                        <Text size="4">{t("Content.cnc")}</Text>
                    </Tabs.Content>

                    <Tabs.Content value="pn">
                        <Text size="4">{t("Content.pnc")}</Text>
                    </Tabs.Content>

                    <Tabs.Content value="wc">
                        <Text size="4">{t("Content.wcc")}</Text>
                    </Tabs.Content>
                </Flex>
            </Tabs.Root>
            </Flex>
        </Flex>
    )
}