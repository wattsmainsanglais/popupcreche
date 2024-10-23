import { Tabs, Flex, Box, Text, Heading } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

import cn from '../../../../../public/services/cn45.jpg'
import pn from '../../../../../public/services/pn45.jpg'
import wc from '../../../../../public/services/wc45.jpg'

import { ResponsiveHeadingSizes, ResponsiveTextSizes } from "../../layout";


export default function Services(){

    type ServicesTypes = {
        heading: string,
        src: StaticImageData,
        text: string,
        value: string
    }

    const t = useTranslations("Services")

    const servicesArray: ServicesTypes[] = [
       {
        heading: t("Headings.cn"),
        src: cn,
        text: t("Content.cnc"),
        value: 'cn'
       },
       {
        heading: t("Headings.pn"),
        src: pn,
        text: t("Content.pnc"),
        value: 'pn'
       },
       {
        heading: t("Headings.wc"),
        src: wc,
        text: t("Content.wcc"),
        value: 'wc'
       }

    ]

    return (
        <Flex width='90vw' justify='center' direction='column'>
            <Flex justify='center' pb='8'>
                  <Heading size={ResponsiveHeadingSizes} >
                    Services
                </Heading>
            </Flex>
            <Flex justify='center' align='center'>
            <Tabs.Root defaultValue="cn"  >
                <Flex justify='center' pb='3' width={{initial: '95vw', xs: '95vw', sm: '95vw', md: '90vw', lg: '75vw'}} >
                <Tabs.List>
                    <Flex  gap={{initial: '1', xs: '1', sm: '2', md: '5', lg: '9'}} justify='center' width='99vw'>
                       { servicesArray.map((s: ServicesTypes, index: number) =>  
                        <Flex key={index} direction='column' justify='center' align='center'>
                                <Image
                                style={{
                                    maxWidth: '90%',
                                    height: 'auto'
                                }}
                                alt={`The Pop-up Wedding Creche - ${s.heading}`}
                                src={s.src}
                                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 30vw,"
                                />
                                <Tabs.Trigger value={s.value}>
                                    <Text align='center' wrap='wrap' trim='normal' size={ResponsiveHeadingSizes}>{s.heading}</Text>
                                </Tabs.Trigger>
                            </Flex>
                        )}
                    
                    </Flex>
                </Tabs.List>
                </Flex>
                <Flex justify='center' pt='4' pl={{initial: '3', xs: '3', sm: '3', md: '0'}} pr={{initial: '3', xs: '3', sm: '3', md: '0'}}>
                   { servicesArray.map((s: ServicesTypes, index: number) => 
                        <Tabs.Content key={index} value={s.value}>
                            <Text size={ResponsiveTextSizes}>{s.text}</Text>
                        </Tabs.Content>
                    )}
                </Flex>
            </Tabs.Root>
            </Flex>
        </Flex>
    )
}