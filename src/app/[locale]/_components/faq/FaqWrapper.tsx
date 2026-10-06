import { getTranslations } from "next-intl/server";
import { translator } from "../../_translations/translations";

import Faq from "./Faq";


export default async function FaqWrapper(){

    const tprops = await translator()
    const t = await getTranslations("Faq")

    return (
        <section id='faq' className="px-4 py-16 md:py-24">
            <h2 className="section-title text-center">{t("heading")}</h2>
            <Faq tprops={tprops} />
        </section>
    )
}
