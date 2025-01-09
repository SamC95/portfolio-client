import React from "react";

interface PrContainerProps {
    id: number;
    title: string;
    url: string;
    created_at: string;
    user: { login: string; email: string };
    repo_url: string;
    state: string;
    merged: string;
}

const getRepositoryName = (url: string) => {
    const parts = url.split('/');
    return `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
}

const PrContainer: React.FC<PrContainerProps> = ({id, title, url, created_at, user, repo_url, state, merged}) => {
    // Updates text if pull request was merged
    const displayState = merged !== null ? 'MERGED' : state;

    return (
        <div key={id} className="pull-request">
            <div className="content">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                >
                    {getRepositoryName(repo_url)} - {title}
                </a>
                <p className="meta">
                    #{id} opened by{" "}
                    <a
                        className={'profileLink'}
                        href={`https://github.com/${user.login}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {user.login}
                    </a>{" "}
                    on {new Date(created_at).toLocaleDateString()}
                </p>
                <span
                    className={`state ${merged !== null ? 'merged' : state}`}>
                    {displayState.toUpperCase()}
                </span>
            </div>
        </div>
    )
}

export default PrContainer;
