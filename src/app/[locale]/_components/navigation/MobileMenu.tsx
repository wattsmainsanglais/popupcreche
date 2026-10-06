'use client'

import { useEffect, useState } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

import { NavList } from './navBar';

export default function MobileMenu({navList}: {navList: NavList[]}){

    const [open, setOpen] = useState(false)

    // Close on Escape
    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open])

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-mint">
                {open ? <RxCross2 size={26} /> : <RxHamburgerMenu size={26} />}
            </button>

            {open && (
                <ul id="mobile-menu" className="absolute inset-x-0 top-16 border-b border-mint bg-white px-4 pb-4 shadow-lg">
                    {navList.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-lg font-semibold text-ink hover:bg-mint">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
