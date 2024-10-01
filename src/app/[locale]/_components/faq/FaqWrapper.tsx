import { translator } from "../../_translations/translations";


import Faq from "./Faq";


export default async function FaqWrapper(){


    const tprops = await translator()

    return (
        <>
            
            <Faq tprops={tprops} />
        
        </>
    )

}