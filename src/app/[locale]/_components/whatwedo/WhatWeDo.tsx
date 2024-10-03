
import { Flex, Heading, Text, Box} from "@radix-ui/themes";

import { useTranslations } from "next-intl";


export default function Whatwedo(){

    let t = useTranslations("What")

    return(
        <Flex width='99vw' justify='center' direction='column' p='5' style={{backgroundColor: '#c8e6e0' }}>

            <Heading align='center' m='4'>
                {t("heading")}
            </Heading>
            <Box p='3' >
                <Text size='4' >  
                {t("para")}

                </Text>

            </Box>
            
        </Flex>
    )
}