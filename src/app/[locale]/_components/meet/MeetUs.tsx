import { useTranslations } from "next-intl";

import sinead from '../../../../../public/images/sinead-profile-altcs.jpg'
import harriet from '../../../../../public/images/harriet-profile-altsc.jpg'
import gaelle from '../../../../../public/images/KL2_8009.jpg'
import rachel from '../../../../../public/images/rachel-profile.jpg'

import MeetTabs, { MeetData } from "./MeetTabs";


export default function Meetus(){

    const t = useTranslations("Meet")

    const meetData: MeetData[] = [
        { name: 'Sinead', src: sinead, text: t("sinead") },
        { name: 'Harriet', src: harriet, text: t("harriet") },
        { name: 'Gaelle', src: gaelle, text: t("gaelle") },
        { name: 'Rachel', src: rachel, text: t("rachel") },
    ]

    return(
        <section id='Meet-us' className="bg-cream px-4 py-16 md:py-24">
            <h2 className="section-title text-center">{t("heading")}</h2>
            <MeetTabs people={meetData} />
        </section>
    )
}
