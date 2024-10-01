import { getTranslations } from "next-intl/server"

import truck from '../../../../public/images/trucks.png'
import dino from '../../../../public/images/dino.png'
import rings from '../../../../public/images/rings.png'
import blocks from '../../../../public/images/blocks.png'


export async function translator(){

const t = await getTranslations("Faq")


const translationsA = [

    {q: t("qs.q1"),
    a: t("qs.a1"),
    i: truck
    },
    
    {q: t("qs.q2"),
    a: t("qs.a2"),
    i: dino
    },
    
    {q: t("qs.q3"),
    a: t("qs.a3"),
    i: rings
     },

    
    {q: t("qs.q4"),
     a: t("qs.a4"),
     i: blocks
    },


]
   

return translationsA

}