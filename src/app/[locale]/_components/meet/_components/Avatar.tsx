import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { Flex, Box, Tabs, Text, Avatar } from "@radix-ui/themes";
import { ReactNode } from "react";


export default function MeetUsAvatar({name, src, value}: {name: string, src: string, value: string}){

    return (
        <Flex direction='column' align='center'>
          
            <Avatar 
                src={src}
                fallback='S'
                size='9'
            />
            <Tabs.Trigger value={value}>
                <Text size='4'>{name}</Text>

            </Tabs.Trigger>

            

        </Flex>
    )

}