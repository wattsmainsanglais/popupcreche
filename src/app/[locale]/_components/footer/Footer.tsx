import Link from "next/link";
import Image from "next/image";
import { Genos } from "next/font/google";

import logoMid from "../../../../../public/images/Logo-final-wo-central.jpg"

const genos = Genos({weight: ["500"] , subsets: ['latin']})

const credits = [
    { name: 'Katy Lunsford Photography', href: 'https://www.katylunsford.com/' },
    { name: 'Anneli Marinovich Photography', href: 'https://annelimarinovich.com/' },
    { name: 'Michael Mann Photography', href: 'https://michaelmannphotography.com/' },
    { name: 'Lydia Taylor Photography', href: 'https://www.lydiataylorjones.com/' },
    { name: 'David Page Photography', href: 'https://www.davidpagephotography.com/' },
    { name: 'Logo and Graphics by Aquaroline', href: 'https://www.aquaroline.com/' },
    { name: 'Rainey Mills Photography', href: 'https://rmphotography.weebly.com/' },
]

export default function Footer(){

    return (
    <footer className="border-t border-mint px-4 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
            <Image src={logoMid} alt='The Pop-up Wedding Crèche' width={110} height={110} />
            <a href="mailto:thepopupweddingcreche@gmail.com" className="font-semibold text-sage-dark hover:underline">thepopupweddingcreche@gmail.com</a>

            <details className="group mt-2 text-sm text-muted">
                <summary className="cursor-pointer list-none font-semibold hover:text-ink [&::-webkit-details-marker]:hidden">
                    Photo &amp; Art Credits <span className="inline-block transition-transform group-open:rotate-180">▾</span>
                </summary>
                <ul className="mt-3 flex flex-col gap-1.5">
                    {credits.map((c) => (
                        <li key={c.href}><a href={c.href} target='_blank' rel="noopener noreferrer" className="hover:text-ink hover:underline">{c.name}</a></li>
                    ))}
                </ul>
            </details>

            <p className="mt-4 text-sm text-muted">Powered By <Link href='https://www.awattsdev.eu' target="_blank" className={`${genos.className} wattsLink`}>awattsdev</Link></p>
        </div>
    </footer>
    )
}
