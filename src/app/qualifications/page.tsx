'use client'

import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import '../qualifications/qualifications.sass'
import {useEffect, useState} from "react";
import Container from "@/app/components/container/container";
import {universityInfo} from "@/app/qualifications/posts/universityInfo";
import {collegeInfo} from "@/app/qualifications/posts/collegeInfo";

export default function Qualifications() {
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
            <div className={'page-container'}>
                <div className={`section ${isLoaded ? 'loaded' : ''}`}>
                    <h1>
                        <span>Education</span>
                    </h1>
                    <div className={"section-underline"}></div>
                </div>

                <div>
                    <Container
                        title={universityInfo.title}
                        grade={universityInfo.grade}
                        location={universityInfo.location}
                        duration={universityInfo.duration}
                        points={universityInfo.points}
                        isLoaded={isLoaded}
                    />
                </div>

                <div>
                    <Container
                        title={collegeInfo.title}
                        grade={collegeInfo.grade}
                        location={collegeInfo.location}
                        duration={collegeInfo.duration}
                        points={collegeInfo.points}
                        isLoaded={isLoaded}
                    />
                </div>

                <div className={`downloadLink ${isLoaded ? 'loaded' : ''}`}>
                    <p>See my full resume</p>
                    <a href={"/cv/cv-jan-2025.pdf"} download className={"downloadButton"}>
                        Download
                    </a>
                </div>
                {/*Not enabled at the moment*/}
                {/*<div className={`section ${isLoaded ? 'loaded' : ''}`}>*/}
                {/*    <h1>*/}
                {/*        <span>Certificates</span>*/}
                {/*    </h1>*/}
                {/*    <div className={"section-underline"}></div>*/}

                {/*    <p>*/}
                {/*        Nothing just yet!*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
            <Footer/>
        </>
    )
}
