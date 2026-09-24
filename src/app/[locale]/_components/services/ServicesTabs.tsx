'use client'

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

export type ServiceItem = {
    heading: string,
    src: StaticImageData,
    text: string,
    value: string
    credit: string
}

export default function ServicesTabs({services}: {services: ServiceItem[]}){

    const [selected, setSelected] = useState(services[0].value)
    const current = services.find((s) => s.value === selected) ?? services[0]

    return (
        <div className="mx-auto mt-10 max-w-5xl">
            <div role="tablist" aria-label="Services" className="grid grid-cols-3 gap-3 md:gap-8">
                {services.map((s) => {
                    const isSelected = s.value === selected
                    return (
                        <button
                            key={s.value}
                            type="button"
                            role="tab"
                            id={`service-tab-${s.value}`}
                            aria-selected={isSelected}
                            aria-controls={`service-panel-${s.value}`}
                            onClick={() => setSelected(s.value)}
                            className="group flex flex-col items-center text-center">
                            <span className={`block overflow-hidden rounded-2xl ring-offset-4 transition ${isSelected ? 'ring-4 ring-sage' : 'opacity-75 group-hover:opacity-100'}`}>
                                <Image
                                    src={s.src}
                                    alt={`The Pop-up Wedding Crèche - ${s.credit}`}
                                    title={s.credit}
                                    placeholder="blur"
                                    sizes="(max-width: 768px) 30vw, 300px"
                                    className="aspect-4/5 h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </span>
                            <span className={`mt-3 font-display text-lg font-semibold leading-tight md:text-2xl ${isSelected ? 'text-ink' : 'text-muted'}`}>
                                {s.heading}
                            </span>
                        </button>
                    )
                })}
            </div>

            <div
                role="tabpanel"
                id={`service-panel-${current.value}`}
                aria-labelledby={`service-tab-${current.value}`}
                className="mx-auto mt-8 max-w-3xl rounded-2xl bg-cream p-6 md:p-10">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">{current.heading}</h3>
                <p className="mt-3 text-lg leading-relaxed">{current.text}</p>
            </div>
        </div>
    )
}
