import Image from "next/image";


import { Flex, Heading, Text, Box, Tabs} from "@radix-ui/themes";

import { useTranslations } from "next-intl";

import sinead from '../../../../../public/images/sinead-profile-alt.jpg'

import harriet from '../../../../../public/images/harriet-profile-alt.jpg'
import gaelle from '../../../../../public/images/KL2_8009.jpg'

import style from './meet.module.css'
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import MeetUsAvatar from "./_components/Avatar";

 interface MeetData {
    name: string,
    src: string,
    value: string,
    text: string,
 }

 

 


export default function Meetus(){

    const t = useTranslations("Meet")

    const meetData: MeetData[] = [
        {
          name: 'Sinead',
          src: `${process.env.LIVESITE}images/sinead-profile-alt.jpg`,
          value: 'Si',
          text:  t("sinead") 
        },
        {
            name: 'Harriet',
            src: `${process.env.LIVESITE}images/harriet-profile-alt.jpg`,
            value: 'Ha',
            text:  t("harriet") 
          },
          {
            name: 'Gaelle',
            src: `${process.env.LIVESITE}images/KL2_8009.jpg`,
            value: 'Ga',
            text:  t("sinead") 
          },
          {
            name: 'Rachel',
            src: `${process.env.LIVESITE}images/sinead-profile-alt.jpg`,
            value: 'Ra',
            text:  t("sinead") 
          },
       
    ]

    return(

    <Flex id='Meet-us' direction='column' width='99vw' style={{backgroundColor: '#efe7e1'}} p='4'>

        <Box mt='5'>
            <Heading align='center'>
                {t("heading")}
            </Heading>
        </Box>

        {/*<Flex justify='center' p='5'>

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
        </Flex>*/}
        <Flex justify='center' p='8'>

            <Tabs.Root defaultValue="Si">
                <Tabs.List>
                <Flex justify='center'width='75vw' gap='8'>
                {meetData.map((m: MeetData , index: number) => (
                    <MeetUsAvatar key={index} name={m.name} src={m.src} value={m.value} />
                ))}
                </Flex>
                </Tabs.List>
                
                <Flex justify='center' width='75vw' p='5'>
                {meetData.map((m: MeetData, index: number) => (
                    <Flex justify='center' key={index}> 
                    <Tabs.Content  value={m.value}>
                        <Text size='4'>{m.text}</Text>
                    </Tabs.Content>
                    </Flex>
                ))}

                </Flex>

            </Tabs.Root>


        </Flex>


    </Flex>
    )
}