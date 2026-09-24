'use server'

import { sendMail } from "./nodemailer"

export type ContactResult = { ok: true } | { ok: false, error: 'invalid' | 'send' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function field(data: FormData, key: string, maxLength: number) {
    // Collapse newlines in single-line fields so they can't leak into email headers
    const value = String(data.get(key) ?? '').trim()
    return (key === 'message' ? value : value.replace(/[\r\n]+/g, ' ')).slice(0, maxLength)
}

export async function submitContactForm(data: FormData): Promise<ContactResult> {

    // Honeypot field, hidden from real visitors: bots that fill it get a silent "success"
    if (data.get('company')) return { ok: true }

    const enquiry = {
        name: field(data, 'name', 100),
        email: field(data, 'email', 254),
        tel: field(data, 'tel', 30),
        message: field(data, 'message', 5000)
    }

    if (!enquiry.name || !EMAIL_PATTERN.test(enquiry.email) || !enquiry.message) {
        return { ok: false, error: 'invalid' }
    }

    try {
        await sendMail(enquiry)
        return { ok: true }
    } catch (err) {
        console.error('Enquiry email failed', err)
        return { ok: false, error: 'send' }
    }
}
