import { GRAPHQL_STATS_QUERY } from '@/queries';
import { fetcher } from '@/utils';
export const getStatsData = async (username) => {
    let variables = {
        login: username,
        first: 100,
        after: null
    };
    let response = await fetcher(variables, GRAPHQL_STATS_QUERY);
    let user = response.data.user;
    let avatar = user.avatarUrl.slice(0, user.avatarUrl.length - 4);
    let totalCommits = user.contributionsCollection.totalCommitContributions;
    let totalPRs = user.pullRequests.totalCount;
    let totalReviews = user.contributionsCollection.totalPullRequestReviewContributions;
    let totalIssues = user.openIssues.totalCount + user.closedIssues.totalCount;
    let totalStars = user.repositories.nodes.reduce((prev, curr) => prev + curr.stargazers.totalCount, 0);
    return {
        name: user.name || user.login,
        avatar: avatar || '',
        url: user.url,
        commits: totalCommits,
        prs: totalPRs,
        reviews: totalReviews,
        issues: totalIssues,
        repos: user.repositories.totalCount,
        stars: totalStars,
        followers: user.followers.totalCount,
    };
};
