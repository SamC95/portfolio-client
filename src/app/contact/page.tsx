'use client'

import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import '../../styles/sectionheader.sass'
import './contact.sass'
import EmailSVG from '../../../public/contact-icons/icons8-email-50.png'
import GithubSVG from '../../../public/contact-icons/icons8-github-50.png'
import LinkedInSVG from '../../../public/contact-icons/icons8-linkedin-circled-50.png'
import {useState, useEffect} from "react";
import Image from 'next/image'

export default function Contact() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <Header/>

            <div className={`section-push ${isLoaded ? 'loaded' : ''}`}>
                <div className={`section ${isLoaded ? 'loaded' : ''}`}>
                    <h1>
                        <span>Contact Me!</span>
                    </h1>
                    <div className={"section-underline"}></div>
                </div>
                <p className={isLoaded ? 'loaded' : ''}>I&#39;d love to hear from you!</p>
                <p className={isLoaded ? 'loaded' : ''}>Reach out using the information below</p>

                <div className={`contact-details ${isLoaded ? 'loaded' : ''}`}>
                    <div className="detail-item">
                        <Image src={EmailSVG} alt="Email Icon" className="icon"/>
                        <a href="mailto:samclark.developer@gmail.com">samclark.developer@gmail.com</a>
                    </div>
                </div>
                <br/>
                <br/>
                <p className={isLoaded ? 'loaded' : ''}>Socials</p>
                <div className="social-icons">
                    <a
                        href="https://github.com/SamC95"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`icon ${isLoaded ? 'fade-in delay-2' : ''}`}
                    >
                        <Image src={GithubSVG} alt="GitHub Icon" width={50} height={50}/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sam-clark-software-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`icon ${isLoaded ? 'fade-in delay-3' : ''}`}
                    >
                        <Image src={LinkedInSVG} alt="LinkedIn Icon" width={50} height={50}/>
                    </a>
                </div>
            </div>

            <Footer/>
        </>
    )
}