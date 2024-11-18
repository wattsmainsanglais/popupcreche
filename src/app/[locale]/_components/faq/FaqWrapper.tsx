import { translator } from "../../_translations/translations";
 import { Flex } from "@radix-ui/themes";

import Faq from "./Faq";
import FaqMobile from "./FaqMobile";


export default async function FaqWrapper(){

    
    const tprops = await translator()

    return (
        
        <Flex width='99vw' id='faq'>
            <Faq tprops={tprops} />
        </Flex>
        
    )

}