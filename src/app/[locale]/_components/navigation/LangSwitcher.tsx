import Link from "next/link";

const locales = ['en', 'fr']

export default function LanguageSwitcher({locale}: {locale: string}){

    return (
        <div className="flex items-center rounded-full border border-mint p-0.5 text-sm font-bold uppercase">
            {locales.map((l) => (
                <Link
                    key={l}
                    href={`/${l}`}
                    hrefLang={l}
                    aria-current={l === locale ? 'true' : undefined}
                    className={`rounded-full px-2.5 py-1 transition-colors ${l === locale ? 'bg-mint text-ink' : 'text-muted hover:text-ink'}`}>
                    {l}
                </Link>
            ))}
        </div>
    )
}
