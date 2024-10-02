'use server'


 import { sendMail } from "./nodemailer.js"

export async function submitContactForm(data: FormData){
   
    const mailOptions = {
    name: data.get('name') as string,
    email: data.get('email') as string,
    message: data.get('message') as string,
    tel: data.get('tel') as string

 }

     const {message, error} = await sendMail(mailOptions)
     if(error){
        console.log(error)
        return {error}
     } else {
        console.log(message)
        return {message}
     }
     
   
   


}