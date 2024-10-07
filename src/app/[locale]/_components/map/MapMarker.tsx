import React from "react";

import { Flex, Box, Text } from "@radix-ui/themes";

import {TargetIcon} from '@radix-ui/react-icons'
import { AdvancedMarker } from "@vis.gl/react-google-maps";

export default function MapMarker(){



    return(
        <AdvancedMarker position={{lat: 46.11, lng: 0.5}}>

            <TargetIcon fontSize={24} />

        </AdvancedMarker>

    )
}