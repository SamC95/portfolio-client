'use client'

import "../styles/landing.sass"
import "../styles/imagerow.sass"
import "../styles/sectionheader.sass"
import Header from "@/app/components/header/header";
import {useEffect, useState} from "react";
import placeholder from "../images/placeholder.jpg"
import javaIcon from "../images/icons/java/java-original-wordmark.svg"
import Image from "next/image";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    })

    return (
        <>
            <Header/>

            <div className={'hero-wrapper'}>
                <div className={`hero ${isLoaded ? 'loaded' : ''}`}>
                    <div className={'hero-content'}>
                        <h1>
                            Hi, I&#39;m Sam!
                            <br/>
                            <span>A UK-based Software Developer</span>
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
                                <h2>5+</h2>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <h2>25+</h2>
                                <p>Pull Requests</p>
                            </div>
                        </div>
                    </div>
                    <div className={'hero-image'}>
                        <Image src={placeholder} alt={"placeholder image"}/>
                    </div>
                </div>
            </div>

            <h1 className={"section"}>
                <span>Technologies Used</span>
            </h1>

            <div className={"image-row"}>
                <Image src={javaIcon} alt={"java logo"}/>
            </div>
        </>
    );
}
