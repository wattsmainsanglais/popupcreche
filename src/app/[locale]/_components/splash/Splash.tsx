import Image from "next/image";
import { useTranslations } from "next-intl";

import logo from '../../../../../public/images/Logo-final-wo-central.jpg'

export default function Splash(){

    const t = useTranslations("Splash")
    return(
        <section className="flex flex-col items-center px-4 pb-14 pt-6 text-center md:pb-20">
            <Image
                src={logo}
                alt='The Pop-up Wedding Crèche'
                priority
                sizes="(max-width: 768px) 80vw, 420px"
                className="h-auto w-[80vw] max-w-[420px]"
            />
            <h1 className="mt-2 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">
                {t("heading")}
            </h1>
            <p className="mt-4 text-lg font-semibold uppercase tracking-[0.2em] text-sage-dark md:text-xl">
                {t("heading1")}
            </p>
        </section>
    )
}
