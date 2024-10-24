import Image from "next/image";


import { Flex, Heading, Text, Box, Tabs} from "@radix-ui/themes";

import { useTranslations } from "next-intl";

import sinead from '../../../../../public/images/sinead-profile-alt.jpg'

import harriet from '../../../../../public/images/harriet-profile-alt.jpg'
import gaelle from '../../../../../public/images/KL2_8009.jpg'

import style from './meet.module.css'
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import MeetUsAvatar from "./_components/Avatar";
import { small } from "framer-motion/client";

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
          src: `images/sinead-profile-alt.jpg`,
          value: 'Si',
          text:  t("sinead") 
        },
        {
            name: 'Harriet',
            src: `images/harriet-profile-alt.jpg`,
            value: 'Ha',
            text:  t("harriet") 
          },
          {
            name: 'Gaelle',
            src: `images/KL2_8009.jpg`,
            value: 'Ga',
            text:  t("sinead") 
          },
          {
            name: 'Rachel',
            src: `images/sinead-profile-alt.jpg`,
            value: 'Ra',
            text:  t("sinead") 
          },
       
    ]

    return(

    <Flex id='Meet-us' direction='column' width='99vw' style={{backgroundColor: '#efe7e1'}} p='4'>

        <Box mt='5' mb={{initial: '2', xs:'2', sm: '2', md: '0'}} >
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
        <Flex justify='center' p={{initial: '3', xs: '3', sm: '3', md: '5', lg: '8'}}>

            <Tabs.Root defaultValue="Si">
                <Flex direction={{initial: 'row', xs: 'row', sm: 'row', md: 'column'}} height={{initial: '65vh', xs: '70vh', sm: '60vh', md: '80vh'}} align={{initial: 'start', xs: 'start', sm: 'start', md: 'center'}}>
                    <Tabs.List >
                    <Flex justify='center' width={{initial: '35vw', xs: '35vw', sm: '40vw', md: '75vw'}} gap={{initial: '3', xs: '3', sm: '4', md: '8'}} direction={{initial:'column', xs: 'column', sm: 'column', md: 'row'}}>
                    {meetData.map((m: MeetData , index: number) => (
                        <MeetUsAvatar key={index} name={m.name} src={m.src} value={m.value} />
                    ))}
                    </Flex>
                    </Tabs.List>
                    
                    <Flex justify='center' width={{initial: '65vw', xs: '65vw', sm: '60vw', md: '75vw'}} p={{initial: '3', xs: '5', sm: '5', md: '7'}}>
                    {meetData.map((m: MeetData, index: number) => (
                        <Flex justify='center' key={index} align={{initial: 'start', xs: 'start', sm: 'start'}}> 
                        <Tabs.Content  value={m.value}>
                            <Text size={{initial: '2', xs: '2', sm: '4', md: '4'}}>{m.text}</Text>
                        </Tabs.Content>
                        </Flex>
                    ))}

                    </Flex>
                </Flex>
            </Tabs.Root>


        </Flex>


    </Flex>
    )
}