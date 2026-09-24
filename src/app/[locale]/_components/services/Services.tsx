import { useTranslations } from "next-intl";

import cn from '../../../../../public/services/cn45.jpg'
import pn from '../../../../../public/services/pn45.jpg'
import wc from '../../../../../public/services/wc45.jpg'

import ServicesTabs, { ServiceItem } from "./ServicesTabs";


export default function Services(){

    const t = useTranslations("Services")

    const servicesArray: ServiceItem[] = [
       {
        heading: t("Headings.cn"),
        src: cn,
        text: t("Content.cnc"),
        value: 'cn',
        credit: 'Photo Credit- Anneli Marinovich Photography'
       },
       {
        heading: t("Headings.pn"),
        src: pn,
        text: t("Content.pnc"),
        value: 'pn',
        credit: 'Photo Credit- Katy Lunsford Photography'
       },
       {
        heading: t("Headings.wc"),
        src: wc,
        text: t("Content.wcc"),
        value: 'wc',
        credit: 'Photo Credit- Katy Lunsford Photography'
       }
    ]

    return (
        <section id="Services" className="px-4 py-16 md:py-24">
            <h2 className="section-title text-center">Services</h2>
            <ServicesTabs services={servicesArray} />
        </section>
    )
}
