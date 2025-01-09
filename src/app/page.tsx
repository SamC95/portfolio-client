'use client'

import "../styles/landing.sass"
import "../styles/imagerow.sass"
import "../styles/sectionheader.sass"
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {useEffect, useState} from "react";
import placeholder from "../images/kat.png"
import Image from "next/image";
import { frontEndLogos } from "@/app/logos/frontEndLogos";
import { backEndLogos } from "@/app/logos/backEndLogos";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    })

    const allFrontEndLogos = [...frontEndLogos, ...frontEndLogos];
    const allBackEndLogos = [...backEndLogos, ...backEndLogos];

    return (
        <>
            <Header/>
            <div className={'hero-wrapper'}>
                <div className={`hero ${isLoaded ? 'loaded' : ''}`}>
                    <div className={'hero-content'}>
                        <h1>
                            Hi, I&#39;m Sam!
                            <br/>
                            <span>Software Developer</span>
                        </h1>
                        <div className={"underline"}></div>
                        <p>
                            I am a highly motivated, organised software engineering graduate with a passion for
                            developing
                            high quality software applications using front-end and back-end technologies.
                        </p>
                        <div className={"stats"}>
                            <div>
                                <h2>3+</h2>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h2>10+</h2>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <h2>25+</h2>
                                <p>Pull Requests</p>
                            </div>
                        </div>
                    </div>
                    <div className={'hero-image'}>
                        <Image src={placeholder} className={"image"} alt={"placeholder image"}/>
                    </div>
                </div>
            </div>

            <div className={`section ${isLoaded ? 'loaded' : ''}`}>
                <h1>
                    <span>What I&#39;ve been working with!</span>
                </h1>
                <div className={"section-underline"}></div>
            </div>

            <div className={`image-row ${isLoaded ? 'loaded' : ''}`}>
                <h1>
                    <span>Front End</span>
                </h1>
                <div className={"image-wrapper"}>
                    <div className={"image-logos"}>
                        {allFrontEndLogos.map((image, index) => (
                            <Image
                                key={index}
                                className={"img"}
                                src={image.src}
                                alt={image.alt}
                                width={125}
                                height={500}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className={`image-row ${isLoaded ? 'loaded' : ''}`}>
                <h1>
                    <span>Back End</span>
                </h1>
                <div className={"image-wrapper"}>
                    <div className={"image-logos"}>
                        {allBackEndLogos.map((image, index) => (
                            <Image
                                key={index}
                                className={"img"}
                                src={image.src}
                                alt={image.alt}
                                width={125}
                                height={500}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
