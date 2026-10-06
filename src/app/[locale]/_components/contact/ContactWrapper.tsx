import { useTranslations } from "next-intl";

import ContactForm from "./ContactForm";
import Socials from "./Socials";

export default function ContactWrapper(){

    const t = useTranslations("Contact")

    const trans: {[key: string]: string} = {
        heading: t('heading'),
        name: t('formfields.name'),
        email: t('formfields.email'),
        tele: t('formfields.tele'),
        msg: t('formfields.msg'),
        send: t('form.send'),
        success: t('form.success'),
        errorInvalid: t('form.errorInvalid'),
        errorSend: t('form.errorSend')
    }

    return(
        <section id='Contact-us' className="bg-mint px-4 py-16 md:py-24">
            <h2 className="section-title text-center">Contact</h2>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-10">
                <ContactForm trans={trans} />
                <Socials />
            </div>
        </section>
    )
}
