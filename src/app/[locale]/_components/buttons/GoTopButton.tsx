'use client'

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";


export default function GoTop(){

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight
            setVisible(max > 0 && window.scrollY / max > 0.35)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            tabIndex={visible ? 0 : -1}
            className={`fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-sage-dark text-white shadow-lg transition-all duration-300 hover:bg-ink ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'}`}>
            <FaArrowUp />
        </button>
    );
  };
