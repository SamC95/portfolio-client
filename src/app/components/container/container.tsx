import React from 'react'
import './container.sass'

interface ContainerProps {
    title: string
    grade: string
    location: string
    duration: string
    points: string[]
    isLoaded: boolean
}

const Container: React.FC<ContainerProps> = ({title, grade, location, duration, points, isLoaded}) => {
    return (
        <div className={`container ${isLoaded ? 'loaded' : ''}`}>
            <h1>{title}</h1>
            <p>{location}</p>
            <p>{grade}</p>

            <ul className={"bulletPoints"}>
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <br/>
            <p>{duration}</p>
        </div>
    );
};

export default Container;
