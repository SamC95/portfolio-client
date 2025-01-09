// Uncomment this import if using authorization
// import config from "../../../../config.json"

interface PullRequestResponse {
    items: never[];
    rateLimitReached: boolean
}

export async function fetchPullRequests(username: string): Promise<PullRequestResponse> {
    const endpoint = `https://api.github.com/search/issues?q=type:pr+author:${username}`;
    const headers = {
        "Accept": "application/json",
        // "Authorization": "Bearer " + config.apiKey
        // Authorization only needed for more than 60 requests/hr
    };

    try {
        const response = await fetch(endpoint, { headers });
        const remaining = response.headers.get('X-RateLimit-Remaining');
        if (remaining === '0') {
            console.log('reached here')
            return { items: [], rateLimitReached: true }
        }

        const data = await response.json();

        return { items: data.items, rateLimitReached: false }
    }
    catch (error) {
        console.error("Failed to fetch Pull Requests", error);
        return { items: [], rateLimitReached: false };
    }
}
