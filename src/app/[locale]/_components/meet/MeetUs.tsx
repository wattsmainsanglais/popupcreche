import Image from "next/image";
import { useTranslations } from "next-intl";

import sinead from '../../../../../public/images/sinead-profile-altcs.jpg'
// Former team members, kept in case the team grows again (translations still in messages/*.json)
// import harriet from '../../../../../public/images/harriet-profile-altsc.jpg'
// import gaelle from '../../../../../public/images/KL2_8009.jpg'
// import rachel from '../../../../../public/images/rachel-profile.jpg'

import MeetTabs, { MeetData } from "./MeetTabs";


export default function Meetus(){

    const t = useTranslations("Meet")

    const meetData: MeetData[] = [
        { name: 'Sinead', src: sinead, text: t("sinead") },
        // { name: 'Harriet', src: harriet, text: t("harriet") },
        // { name: 'Gaelle', src: gaelle, text: t("gaelle") },
        // { name: 'Rachel', src: rachel, text: t("rachel") },
    ]

    const [solo] = meetData

    return(
        <section id='Meet-us' className="bg-mint-pale px-4 py-16 md:py-24">
            <h2 className="section-title text-center">{t("heading")}</h2>
            {meetData.length > 1 ? (
                <MeetTabs people={meetData} />
            ) : (
                // Just Sinead: photo beside her bio, no tabs
                <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
                    <Image
                        src={solo.src}
                        alt={solo.name}
                        sizes="(max-width: 768px) 192px, 256px"
                        className="h-48 w-48 shrink-0 rounded-full object-cover object-top ring-4 ring-sage ring-offset-4 ring-offset-mint-pale md:h-64 md:w-64"
                    />
                    <div className="rounded-2xl border-2 border-mint bg-white p-6 md:p-10">
                        <h3 className="font-display text-2xl font-semibold md:text-3xl">{solo.name}</h3>
                        <p className="mt-3 text-lg leading-relaxed">{solo.text}</p>
                    </div>
                </div>
            )}
        </section>
    )
}
