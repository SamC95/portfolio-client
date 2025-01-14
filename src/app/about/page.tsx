'use client'

import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import '../../styles/sectionheader.sass'
import './about.sass'
import {useEffect, useState} from "react";

export default function About() {
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
                        <span>A little bit about me!</span>
                    </h1>
                    <div className={`section-underline`}></div>
                </div>

                <div className={`intro ${isLoaded ? 'loaded' : ''}`}>
                    <p>
                        I&#39;m a recent graduate from the University of Westminster, achieving First-Class Honours
                        with a focus on full-stack development and mobile application development, I have developed
                        projects in a variety of languages, such as TypeScript, Java, Kotlin and more.
                        <br/>
                        <br/>
                        I&#39;m a motivated self-starter
                        and can work well both alone and collaboratively.
                    </p>
                </div>
                <div className={`underline ${isLoaded ? 'loaded' : ''}`}/>

                <div className={`experience ${isLoaded ? 'loaded' : ''}`}>
                    <p>
                        During my studies, I worked on a variety of projects including my final year project, a
                        digital eCommerce games media application built using TypeScript with React, Node.js and
                        Electron.
                        <br/>
                        <br/>
                        Since finishing university, I have continued to hone my skills by developing projects that
                        challenge
                        me and allow me to harness and expand on prior experience.
                        <br/>
                        <br/>
                        This includes both solo and co-development projects which have allowed me to gain experience
                        in design patterns, continuous integration techniques, semantic versioning, conventional
                        commits,
                        pull requests and more.
                    </p>
                </div>
                <div className={`underline ${isLoaded ? 'loaded' : ''}`}/>

                <div className={`hobbies ${isLoaded ? 'loaded' : ''}`}>
                    <p>
                        When I&#39;m not working on projects, I have keen interests in music, technology and video games; the latter of which often serves
                        as inspiration for my project ideas, solving specific needs or use-cases that I find interesting
                        within the space.
                        <br/>
                        <br/>
                        I&#39;m also looking to contribute to open source projects within this space,
                        so that I can learn from talented developers and continue to develop an eye for best practices
                        and effective design techniques whilst providing my skills to collaborative projects.
                    </p>
                </div>
            </div>

            <Footer/>
        </>
    )
}