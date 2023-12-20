export const PORT: number = parseInt(process.env.PORT as string) || 8080;

export const THEMES: Readonly<string[]> = ['hacker', 'aesthetic', 'rose'];

export const GITHUB_USERNAME_REGEX: RegExp = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
export const GITHUB_REPOSITORY: string = 'https://github.com/Mrcys/xers';
export const GITHUB_API: string = 'https://api.github.com/graphql';
export const GITHUB_AUTH_TOKEN: string = process.env.GITHUB_AUTH_TOKEN as string;