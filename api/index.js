import { getStatsCard, getStatsData } from '../src/services';
import { isValidTheme, isValidUsername } from '../src/utils';
export default async ({ query, set }) => {
    let { username, theme } = query;
    try {
        if (theme && !isValidTheme(theme))
            throw Error('That theme does not exist!');
        if (!username && !isValidUsername(username))
            throw Error('That username does not exist!');
        let stats = await getStatsData(username);
        let statsCard = getStatsCard(stats, theme);
        set.headers['Content-Type'] = 'image/svg+xml';
        return statsCard;
    }
    catch (error) {
        console.log(error);
    }
};
