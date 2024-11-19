
import { Flex, Heading, Text, Box} from "@radix-ui/themes";

import { useTranslations } from "next-intl";

import { ResponsiveTextSizes, ResponsiveHeadingSizes } from "../../fonts/ResponsiveFontSizes";

export default function Whatwedo(){

    let t = useTranslations("What")

    return(
        <Flex id='What-we-do' width='99vw' justify='center' direction='column' p='5' style={{backgroundColor: '#c8e6e0' }}>

            <Heading size={ResponsiveHeadingSizes} align='center' m='4'>
                {t("heading")}
            </Heading>
            <Box p='3' >
                <Text size={ResponsiveTextSizes} >  
                {t("para")}

                </Text>

            </Box>
            
        </Flex>
    )
}