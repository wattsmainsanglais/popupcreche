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

        <Box  width='45vw' p='5' onClick={HoverHandle} style={{backgroundColor: color, borderRadius: '10px'}} >
              
        {hovered? <Text size='4'>{a}</Text>:<Flex justify={justify} p='3'><Text size='4' align='right'>{q}</Text></Flex>}
    </Box>
    )
}