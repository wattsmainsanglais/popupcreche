import React from "react";

import { Flex, Box, Text, Button } from "@radix-ui/themes";

import {TargetIcon} from '@radix-ui/react-icons'
import { AdvancedMarker } from "@vis.gl/react-google-maps";

import Image from "next/image";

export default function MapMarker({src, src2}: {src: string, src2: string}){

    const keyStr =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    const triplet = (e1: number, e2: number, e3: number) =>
        keyStr.charAt(e1 >> 2) +
        keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
        keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
        keyStr.charAt(e3 & 63);

    const rgbDataURL = (r: number, g: number, b: number) =>
        `data:image/gif;base64,R0lGODlhAQABAPAA${
            triplet(0, r, g) + triplet(b, 255, 255)
        }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

    

    const[togglePopup, setTogglePopup] = React.useState(false)

    function popupHandler(){
        setTogglePopup(!togglePopup)
    }


    return(
        <Box>
            
            <AdvancedMarker position={{lat: 46.11, lng: 0.5}} onClick={popupHandler} style={{cursor:'pointer'}}>

                 <TargetIcon fontSize={24} />
                 {togglePopup?<Flex style={{position: 'absolute', backgroundColor:'white' }} p='3'>
                            
                            <Text>This is the pop up</Text>
                            <Flex gap='1'>
                                <Image
                                src={src}
                                alt='photo'
                                width={150}
                                height={225}
                                placeholder="blur"
                                blurDataURL={rgbDataURL(237, 181, 6)}
                                />
                                 <Image
                                src={src2}
                                alt='photo'
                                width={150}
                                height={225}
                                placeholder="blur"
                                blurDataURL={rgbDataURL(237, 181, 6)}
                                />

                                
                            </Flex>
                         </Flex>: null}

            </AdvancedMarker>
            
            
        </Box>
    )
}