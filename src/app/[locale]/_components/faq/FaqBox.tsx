import React from "react";

import { Box, Text, Flex } from "@radix-ui/themes";

export default function FaqBox({question, answer, color, justify}){

    const [hovered, setHovered]  =React.useState(false)

    const[q, setq1] = React.useState(question)
    const[a, seta1] = React.useState(answer)

    function HoverHandle(){
        setHovered(!hovered)
     }


    return(

        <Box width='45vw' p='5' onClick={HoverHandle} style={{backgroundColor: color, borderRadius: '10px'}} >
              
        {hovered? <Text>{a}</Text>:<Flex justify={justify} p='5'><Text align='right'>{q}</Text></Flex>}
    </Box>
    )
}