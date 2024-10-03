import { Flex, Box } from "@radix-ui/themes";
import React from "react";


export default function ComponentSeperator({children}: {children: React.ReactNode}){

    return (
    <>  
   
        <Box width='20vw' height='2px' style={{borderTop: '2px solid #c8e6e0' }}></Box>
        <Flex width='100vw' justify='center' align='center' mt='9' mb='9' >

            {children}

        </Flex>
    
    </>
    )
}