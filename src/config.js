export const PORT = parseInt(process.env.PORT) || 8080;
export const THEMES = ['hacker', 'aesthetic', 'rose'];
export const GITHUB_USERNAME_REGEX = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
export const GITHUB_REPOSITORY = 'https://github.com/Mrcys/xers';
export const GITHUB_API = 'https://api.github.com/graphql';
export const GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN;
