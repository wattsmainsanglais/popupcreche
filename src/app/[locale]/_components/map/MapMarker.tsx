import React from "react";

import { Flex, Box, Text, Button, Em} from "@radix-ui/themes";

import {TargetIcon} from '@radix-ui/react-icons'
import { AdvancedMarker, AdvancedMarkerAnchorPoint, Pin, PinProps } from "@vis.gl/react-google-maps";
import bunny from '../../../../../public/images/Pop-up_bunny_marker.png'

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function MapMarker({name, lat, long, src2, info}: {name: string, lat: number, long: number, src2: StaticImport | string, info?: string}){

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
            
            <AdvancedMarker zIndex={1} position={{lat: lat, lng: long}} onClick={popupHandler} style={{cursor:'pointer'}}>

                 <Image src={bunny} width={38} alt='bunny logo' style={{zIndex: '1'}} />
                 {togglePopup?<Flex style={{position: 'absolute', backgroundColor:'white', borderRadius: '10px', zIndex:'3' }} p='3' direction='column' align='center' justify='center' >
                            
                            <Text size='3' ><Em>{name}</Em></Text>
                            <Flex gap='1'>
                                 <Image
                                src={src2}
                                alt={info}
                                title={info}
                                width={142.5}
                                height={90}
                                placeholder="blur"
                                blurDataURL={rgbDataURL(187, 218, 210)}
                                />

                                
                            </Flex>
                            <Text size='1'>{info}</Text>
                         </Flex>: null}

            </AdvancedMarker>
            
            
        </Box>
    )
}

