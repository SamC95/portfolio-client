'use client'

import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {useState, useEffect} from "react";
import './opensource.sass'
import '../components/pr-container/pr-container.sass'
import PrContainer from "../components/pr-container/pr-container";
import {fetchPullRequests} from "@/app/opensource/requests/pull-requests";

type PullRequest = {
    id: number;
    title: string;
    html_url: string;
    merged_at: string;
    created_at: string;
    user: { login: string; email: string };
    repository_url: string;
    state: string;
}

export default function OpenSource() {
    const [pullRequests, setPullRequests] = useState([])
    const [titleLoaded, setTitleLoaded] = useState(false)
    const [rateLimitReached, setRateLimitReached] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTitleLoaded(true)

        const fetchData = async () => {
            try {
                const username = "SamC95";
                const {items = [], rateLimitReached = false} = await fetchPullRequests(username);
                setPullRequests(items)

                if (rateLimitReached) {
                    setRateLimitReached(true)
                }
            } catch (err) {
                console.error("Failed to fetch pull requests", err);
                setPullRequests([]); // Ensure pullRequests is always an array even on error
            } finally {
                setTimeout(() => {
                    setIsLoaded(true);
                }, 500);
            }
        };

        fetchData();
    }, [])

    return (
        <>
            <Header/>

            <div className={`section ${titleLoaded ? 'loaded' : ''}`}>
                <h1>
                    <span>Pull Requests</span>
                </h1>
                <div className={"section-underline"}></div>
            </div>

            <div className={"container"}>
                {isLoaded ? (
                    rateLimitReached ? (
                            <p className={"empty"}>
                                Rate limit reached, please try again later or click{" "}
                                <a href="https://github.com/pulls?q=is%3Aclosed+is%3Apr+author%3ASamC95+archived%3Afalse+"
                                   target="_blank" rel="noopener noreferrer" className={"rateLimitLink"}>
                                    here
                                </a>
                                {" "}to view pull requests (Must be signed in on GitHub).
                            </p>
                        ) :
                        pullRequests.length === 0 ? (
                            <p className={"empty"}>No pull requests found.</p>
                        ) : (
                            pullRequests.map((pullRequest: PullRequest, index) => (
                                <div key={index}>
                                    <PrContainer
                                        id={pullRequest.id}
                                        title={pullRequest.title}
                                        url={pullRequest.html_url}
                                        created_at={pullRequest.created_at}
                                        user={pullRequest.user}
                                        repo_url={pullRequest.repository_url}
                                        state={pullRequest.state}
                                        merged={pullRequest.merged_at}
                                    />
                                </div>
                            ))
                        )
                ) : (
                    <div className="loading-container">
                        <div className="loading-skeleton-box"></div>
                        <div className="loading-skeleton-box"></div>
                        <div className="loading-skeleton-box"></div>
                        <div className="loading-skeleton-box"></div>
                        <div className="loading-skeleton-box"></div>
                        <div className="loading-skeleton-box"></div>
                        <div className="loading-skeleton-box"></div>
                    </div>
                )}
            </div>

            <Footer/>
        </>
    );
}
