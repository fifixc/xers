import { THEMES, GITHUB_USERNAME_REGEX } from '@/config';
export const isValidUsername = (username) => {
    if (GITHUB_USERNAME_REGEX.test(username))
        return true;
    return false;
};
export const isValidTheme = (theme) => {
    if (THEMES.includes(theme.toLowerCase()))
        return true;
    return false;
};
