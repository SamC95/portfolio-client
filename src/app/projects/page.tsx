'use client'

import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import './projects.sass'
import {useEffect, useState} from "react";
import {
    NewsappKotlin,
    MochiBot,
    NewsScraper,
    DigitalStore,
    WeatherApp,
    AsteroidsGame,
    L2JServerAPI,
    L2JClientDatabase,
    MealDatabase,
    DiceGame,
    Portfolio,
    eorzeanMilestones
} from './posts/projects'
import ProjectContainer from "@/app/components/project-container/project-container";
import '../components/project-container/project-container.sass'

export default function Projects() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, [])

    const projects = [
        L2JClientDatabase,
        L2JServerAPI,
        MochiBot,
        NewsScraper,
        eorzeanMilestones,
        Portfolio,
        NewsappKotlin,
        DigitalStore,
        WeatherApp,
        AsteroidsGame,
        MealDatabase,
        DiceGame
    ]

    return (
        <>
            <Header/>

            <div className={`section ${isLoaded ? 'loaded' : ''}`}>
                <h1>
                    <span>Projects I&#39;ve worked on!</span>
                </h1>
                <div className={"section-underline"}></div>
            </div>

            <div className={`projectsContainer ${isLoaded ? 'loaded' : ''}`}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectContainer
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            language={project.language}
                            year={project.year}
                            url={project.url}
                            isLoaded={isLoaded}
                            delay={`${index * 0.2}s`}
                        />
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    )
}
