import { Flex, Box, Text } from "@radix-ui/themes";

import Image from "next/image";
import fb from '../../../../../public/images/Facebook_icon-icons.com_66805.png'
import ig from '../../../../../public/images/Instagram_icon-icons.com_66804.png'


import style from './contact.module.css'

export default function Socials(){

    return(

        <Flex width='80%' height='80%' className={style.socialWrapper} align='center' justify='center'>

            <Flex gap='7'>
        
                <a href="https://www.facebook.com/profile.php?id=61550840310626" target='_blank'>
                    <Image 
                        src={fb}
                        width={100}
                        alt='The Popup Wedding Creche, Instagram Logo'
                        className={style.socialLogo}
                    />
                </a>
                 <a href="https://www.instagram.com/popupweddingcreche/" target='_blank'>
                    <Image 
                    src={ig}
                    width={100}
                    alt='The Popup Wedding Creche, Instagram Logo'
                    className={style.socialLogo}
                    />
                </a>

               
            </Flex>

        </Flex>
    )
}