import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";

import type { FaqItem } from "../../_translations/translations";


// Native <details> accordion: works without JavaScript and is keyboard / screen reader friendly
export default function Faq({tprops}: {tprops: FaqItem[]}){

    return (
        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
            {tprops.map((item, index) => (
                <details key={index} className={`group rounded-2xl border-2 border-mint ${index % 2 === 0 ? 'bg-mint' : 'bg-white'}`}>
                    <summary className="flex cursor-pointer list-none items-center gap-4 p-4 md:p-5 [&::-webkit-details-marker]:hidden">
                        <Image src={item.i} alt='' width={56} height={56} className="h-12 w-12 shrink-0 md:h-14 md:w-14" />
                        <span className="flex-1 text-lg font-bold md:text-xl">{item.q}</span>
                        <FaChevronDown className="shrink-0 text-muted transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="px-5 pb-6 text-lg leading-relaxed md:pl-[5.75rem] md:pr-8">{item.a}</p>
                </details>
            ))}
        </div>
    )
}
