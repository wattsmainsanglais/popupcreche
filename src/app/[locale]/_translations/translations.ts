import { getTranslations } from "next-intl/server"

export async function translator(){

const t = await getTranslations("Faq")

const translations = {

 q1: t("qs.q1"),
 a1: t("qs.a1")
 
}

return translations

}