import { useTranslations } from "next-intl";

export default function Whatwedo(){

    const t = useTranslations("What")

    return(
        <section id='What-we-do' className="bg-mint px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="section-title">{t("heading")}</h2>
                <p className="mt-6 text-lg leading-relaxed md:text-xl">{t("para")}</p>
            </div>
        </section>
    )
}
