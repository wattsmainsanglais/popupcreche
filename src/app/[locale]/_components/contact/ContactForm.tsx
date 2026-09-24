'use client'

import { FormEvent, useState, useTransition } from "react";

import { submitContactForm } from "../../_lib/SubmitContactForm";


import { SubmitButton } from "../buttons/SubmitButton";


export default function ContactForm({trans}: {trans: {[key: string]: string}}  ) {

    const [pending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>('')
    const [message, setMessage] = useState<string | undefined>('')

    // onSubmit rather than <form action>: React 19 clears the form after every action,
    // which would wipe the visitor's message when sending fails
    function submit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const form = event.currentTarget
        const data = new FormData(form)

        setError('')
        setMessage('')

        startTransition(async () => {
            let result
            try {
                result = await submitContactForm(data)
            } catch {
                // Network failure: the request never reached the server
                setError(trans.errorSend)
                return
            }

            if(result.ok){
                setMessage(trans.success)
                form.reset()
            } else {
                // Keep what the visitor typed so they can fix it or try again
                setError(result.error === 'invalid' ? trans.errorInvalid : trans.errorSend)
            }
        })
    }


    const field = "w-full rounded-xl border border-sage/60 bg-white px-4 py-3 text-base text-ink placeholder:text-muted/80 focus:border-sage-dark focus:outline-none focus:ring-2 focus:ring-sage/40"

    return  (
        <form onSubmit={submit} className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-2 text-center font-display text-2xl font-semibold md:text-3xl">{trans.heading}</h3>

            <input name='name' type='text' placeholder={trans.name} aria-label={trans.name} autoComplete='name' maxLength={100} required className={field} />
            <input name='email' type='email' placeholder={trans.email} aria-label={trans.email} autoComplete='email' maxLength={254} required className={field} />
            <input name='tel' type='tel' placeholder={trans.tele} aria-label={trans.tele} autoComplete='tel' maxLength={30} className={field} />
            <textarea name='message' placeholder={trans.msg} aria-label={trans.msg} maxLength={5000} required rows={5} className={`${field} resize-y`} />

            {/* Honeypot: hidden from people, filled in by spam bots */}
            <input type='text' name='company' tabIndex={-1} autoComplete='off' aria-hidden='true' className="absolute -left-[9999px] h-px w-px opacity-0" />

            <SubmitButton pending={pending}>{trans.send}</SubmitButton>
            <div aria-live='polite' className="text-center">
                {error? <p className="text-red-700">{error}</p>:null}
                {message? <p className="font-semibold text-sage-dark">{message}</p>:null}
            </div>
        </form>
    )
}
