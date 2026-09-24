import nodemailer from 'nodemailer'

// SMTP_* names are preferred; HOST/USER/PASS kept as fallbacks for the existing Railway config.
// (USER in particular clashes with the OS username variable, so set SMTP_USER where possible.)
const smtpHost = process.env.SMTP_HOST ?? process.env.HOST
const smtpUser = process.env.SMTP_USER ?? process.env.USER
const smtpPass = process.env.SMTP_PASS ?? process.env.PASS

export type Enquiry = {
    name: string,
    email: string,
    tel: string,
    message: string
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

export async function sendMail({name, email, tel, message}: Enquiry){

    const clientText =

    `<p>Thank you ${escapeHtml(name)} for contacting The Pop-Up Wedding Crèche.</p>
    <br>
    <p>I have received your email and aim to reply to you within three working days. </p>
     <br>
    <p>If this is an initial enquiry please read the information brochure attached to this email, so you can further understand my services. Please fill out my initial enquiry form which gives me the details needed to provide you with a quote ( link at the bottom of this email).</p>
     <br>
    <p>Please follow me on Instagram to see what I have been up to: @popupweddingcreche</p>
     <br>
    <p>Thank you so much and I look forward to speaking to you </p>
     <br>
    <p>Best wishes,</p>
     <br>
    <p>Sinead</p>
     <p>The Pop-Up Wedding Crèche</p>
     <br>


    <p><a href='https://docs.google.com/document/d/1F4KhuIwFr9kqbjKyar5Z277YYqw3PDSV6QSyGALNgfc/edit?tab=t.0'>Link to my Initial Enquiry Form</a></p>`

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: 587,
        secure: false,
        auth: {
            user: smtpUser,
            pass: smtpPass,
        },
    })

    // Enquiry to the business. Sent from our own address (sending "from" the visitor's
    // address fails SPF/DMARC checks), with Reply-To set so hitting reply reaches the visitor.
    await transporter.sendMail({
        from: { name: 'The Pop-up Wedding Crèche website', address: smtpUser! },
        to: smtpUser,
        replyTo: { name, address: email },
        subject: `New enquiry from ${name}`,
        text: `New enquiry from the website\n\nName: ${name}\nEmail: ${email}\nTelephone: ${tel || '(not given)'}\n\nMessage:\n${message}`
    })

    // Confirmation to the visitor. A failure here shouldn't tell the visitor their enquiry failed,
    // because the business has already received it.
    try {
        await transporter.sendMail({
            from: { name: 'The Pop-up Wedding Crèche', address: smtpUser! },
            to: email,
            subject: 'Thank you for your enquiry',
            html: clientText,
            attachments: [
                {
                    filename: 'service-options.pdf',
                    path: 'https://www.thepopupweddingcreche.fr/images/service-options.pdf'
                },
            ]
        })
    } catch (err) {
        console.error('Confirmation email to visitor failed', err)
    }
}
