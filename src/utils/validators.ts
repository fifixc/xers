import { THEMES, GITHUB_USERNAME_REGEX } from '@/config';

export const isValidUsername = (username: string): boolean => {
    if (GITHUB_USERNAME_REGEX.test(username)) return true;
    return false;
}

export const isValidTheme = (theme: string): boolean => {
    if (THEMES.includes(theme.toLowerCase())) return true;
    return false;
}