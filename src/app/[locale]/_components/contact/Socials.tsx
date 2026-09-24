import Image from "next/image";
import fb from '../../../../../public/images/Facebook_icon-icons.com_66805.png'
import ig from '../../../../../public/images/Instagram_icon-icons.com_66804.png'

export default function Socials(){

    return(
        <div className="flex min-h-[22rem] items-center justify-center rounded-2xl bg-[url('/images/girl-alt.jpg')] bg-cover bg-center">
            <div className="flex gap-8">
                <a href="https://www.facebook.com/profile.php?id=61550840310626" target='_blank' rel="noopener noreferrer" className="icon-dance">
                    <Image src={fb} width={88} alt='The Pop-up Wedding Crèche on Facebook' />
                </a>
                <a href="https://www.instagram.com/popupweddingcreche/" target='_blank' rel="noopener noreferrer" className="icon-dance">
                    <Image src={ig} width={88} alt='The Pop-up Wedding Crèche on Instagram' />
                </a>
            </div>
        </div>
    )
}
