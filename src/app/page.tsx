'use client'

import "../styles/landing.sass"
import "../styles/imagerow.sass"
import "../styles/sectionheader.sass"
import Header from "@/app/components/header/header";
import {useEffect, useState} from "react";
import placeholder from "../images/kat.png"
import Image from "next/image";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    })

    const frontEndImages = [
        {src: '/icons/typescript/typescript-plain.svg', alt: 'TypeScript', link: "https://www.typescriptlang.org/"},
        {
            src: '/icons/javascript/javascript-plain.svg',
            alt: 'JavaScript',
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {src: '/icons/react/react-original-wordmark.svg', alt: 'React', link: "https://react.dev/"},
        {src: '/icons/nextjs/nextjs-original.svg', alt: 'NextJS', link: "https://nextjs.org/"},
        {
            src: '/icons/html5/html5-plain-wordmark.svg',
            alt: 'HTML5',
            link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        },
        {
            src: '/icons/css3/css3-plain-wordmark.svg',
            alt: 'CSS3',
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {src: '/icons/sass/sass-original.svg', alt: 'Sass', link: "https://sass-lang.com/"},
        {src: '/icons/bootstrap/bootstrap-original-wordmark.svg', alt: 'Bootstrap', link: "https://getbootstrap.com/"},
    ];

    const backEndImages = [
        {src: '/icons/java/java-original-wordmark.svg', alt: 'Java', link: "https://www.java.com/en/"},
        {src: '/icons/csharp/csharp-original.svg', alt: 'C#', link: "https://learn.microsoft.com/en-us/dotnet/csharp/"},
        {src: '/icons/nodejs/nodejs-plain-wordmark.svg', alt: 'NodeJS', link: "https://nodejs.org/en"},
        {src: `/icons/kotlin/kotlin-plain-wordmark.svg`, alt: 'Kotlin', link: "https://kotlinlang.org/"},
        {src: '/icons/php/php-original.svg', alt: 'PHP', link: "https://www.php.net/"},
        {src: '/icons/sqlite/sqlite-original-wordmark.svg', alt: 'SQLite', link: "https://www.sqlite.org/"},
        {src: '/icons/firebase/firebase-original-wordmark.svg', alt: 'Firebase', link: "https://firebase.google.com/"},
        {src: '/icons/mysql/mysql-original-wordmark.svg', alt: 'MySQL', link: "https://www.mysql.com/"},
    ]

    const allFrontEndImages = [...frontEndImages, ...frontEndImages];
    const allBackEndImages = [...backEndImages, ...backEndImages];

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
                        {allFrontEndImages.map((image, index) => (
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
                        {allBackEndImages.map((image, index) => (
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
        </>
    );
}
