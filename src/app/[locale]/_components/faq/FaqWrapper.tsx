import { translator } from "../../_translations/translations";


import Faq from "./Faq";
import FaqMobile from "./FaqMobile";


export default async function FaqWrapper(){

    
    const tprops = await translator()

    return (
        <>
        
            <Faq tprops={tprops} />
            <FaqMobile tprops={tprops} />
        
        </>
    )

}