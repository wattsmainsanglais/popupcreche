'use client'

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

export interface MeetData {
    name: string,
    src: StaticImageData,
    text: string,
}

export default function MeetTabs({people}: {people: MeetData[]}){

    const [selected, setSelected] = useState(0)
    const person = people[selected]

    return (
        <div className="mx-auto mt-10 max-w-4xl">
            <div role="tablist" aria-label="Team" className="flex justify-center gap-4 md:gap-10">
                {people.map((p, index) => {
                    const isSelected = index === selected
                    return (
                        <button
                            key={p.name}
                            type="button"
                            role="tab"
                            id={`meet-tab-${index}`}
                            aria-selected={isSelected}
                            aria-controls="meet-panel"
                            onClick={() => setSelected(index)}
                            className="group flex flex-col items-center">
                            <Image
                                src={p.src}
                                alt={p.name}
                                sizes="128px"
                                className={`h-16 w-16 rounded-full object-cover object-top ring-offset-4 ring-offset-cream transition sm:h-24 sm:w-24 md:h-32 md:w-32 ${isSelected ? 'ring-4 ring-sage' : 'opacity-70 group-hover:opacity-100'}`}
                            />
                            <span className={`mt-3 text-base font-bold md:text-lg ${isSelected ? 'text-ink' : 'text-muted'}`}>{p.name}</span>
                        </button>
                    )
                })}
            </div>

            <div role="tabpanel" id="meet-panel" aria-labelledby={`meet-tab-${selected}`}
                className="mx-auto mt-8 min-h-[16rem] max-w-3xl rounded-2xl bg-white/70 p-6 md:p-10">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">{person.name}</h3>
                <p className="mt-3 text-lg leading-relaxed">{person.text}</p>
            </div>
        </div>
    )
}
