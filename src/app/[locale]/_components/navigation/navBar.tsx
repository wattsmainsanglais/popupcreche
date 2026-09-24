import Image from "next/image";
import miniLogo from '../../../../../public/images/bunny-good.png'

import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from "./LangSwitcher";
import MobileMenu from "./MobileMenu";


export interface NavList  {
        title: string,
        id: string
       }


export default async function NavBar({locale}: {locale: string}){

    const t = await getTranslations("Nav.Links")

    // Same order as the sections appear on the page
    const navList: NavList[] = [{title: t("what"), id: 'What-we-do'}, {title: t("meet"), id: 'Meet-us'}, {title: t("reviews"), id: 'Reviews'}, {title: t("faq"), id: 'faq'}, {title: t("map"), id: 'Map'}, {title: t("contact"), id: 'Contact-us'}];

    return (
    <header className="sticky top-0 z-40 border-b border-mint bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4" aria-label="Main">
            <a href="#top" className="shrink-0">
                <Image
                    src={miniLogo}
                    height={48}
                    alt='The Pop-up Wedding Crèche'
                    priority
                    className="h-12 w-auto" />
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
                {navList.map((item) => (
                    <li key={item.id}>
                        <a href={`#${item.id}`} className="rounded-full px-3 py-2 text-[15px] font-semibold text-muted transition-colors hover:bg-mint hover:text-ink">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-2">
                <LanguageSwitcher locale={locale} />
                <MobileMenu navList={navList} />
            </div>
        </nav>
    </header>
    )
}
