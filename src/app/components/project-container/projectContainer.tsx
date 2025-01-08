import React from 'react';
import Image from 'next/image'
import './projectContainer.sass'

interface ProjectContainerProps {
    title: string
    image: string
    description: string
    language: string
    year: string
    url: string
    isLoaded: boolean
    delay: string
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
                                                               title, image, description,
                                                               language, year, url,
                                                               isLoaded, delay
                                                           }) => {

    const Content = (
        <div
            className={`projectContainer ${isLoaded ? 'fadeIn' : ''}`}
            style={{ animationDelay: delay }}
        >
            <Image src={image} alt={title} className="projectImage" width={300} height={150} />
            <h3 className="projectTitle">{title}</h3>
            <p className="projectDescription">{description}</p>
            <p className="projectMeta">
                <span>{language}</span>
                <span>{year}</span>
            </p>
        </div>
    );

    // Dynamically renders the content with or without an active link
    return url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className={"projectContainerLink"}>
            {Content}
        </a>
    ) : (
        Content
    )
};

export default ProjectContainer;