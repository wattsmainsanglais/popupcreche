import { useTranslations } from "next-intl";

export default function ReviewWrapper() {

    const t = useTranslations("Reviews")

    return(
        <section id='Reviews' className="py-16 md:py-24">
            <h2 className="section-title px-4 text-center">{t("heading")}</h2>
            <div className="mt-10 bg-[url('/images/reviewBackMobile.jpg')] bg-cover bg-center px-4 py-16 md:bg-[url('/images/Chateau-de-la-Valouze-Anneli-Marinovich-Photography-216.jpg')] md:py-32">
                <div className="mx-auto flex max-w-6xl flex-col gap-8 md:gap-16">
                    <blockquote className="max-w-xl rounded-2xl bg-cream/90 p-6 text-lg italic leading-relaxed shadow-lg backdrop-blur-sm md:p-8 md:text-xl">
                        {t("list.one")}
                    </blockquote>
                    <blockquote className="max-w-xl self-end rounded-2xl bg-cream/90 p-6 text-lg italic leading-relaxed shadow-lg backdrop-blur-sm md:p-8 md:text-xl">
                        {t("list.two")}
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
