import { Flex, Box, Text } from "@radix-ui/themes";


import style from './contact.module.css'

export default function Socials(){

    return(

        <Flex width='80%' height='80%' className={style.socialWrapper} align='center' justify='center'>

            <Box>
                <Text>This is the socials section</Text>
            </Box>

        </Flex>
    )
}