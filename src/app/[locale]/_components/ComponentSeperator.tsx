import { Flex, Box } from "@radix-ui/themes";
import React from "react";


export default function ComponentSeperator({children}: {children: React.ReactNode}){

    return (
    <>  
   
        <Box width='20vw' height='2px' style={{borderTop: '2px solid #c8e6e0' }}></Box>
        <Flex width='100vw' justify='center' align='center' mt={{initial: '5', xs: '5', sm: '5', md: '9'}} mb={{initial: '5', xs: '5', sm: '5', md: '9'}} >

            {children}

        </Flex>
    
    </>
    )
}