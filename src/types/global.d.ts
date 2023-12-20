type StatsQuery = {
    username: string;
    theme?: string;
}

type StatsResponse = {
    name: string;
    avatar: string;
    url: string;
    commits: number;
    prs: number;
    reviews: number;
    issues: number;
    repos: number;
    stars: number;
    followers: number;
}