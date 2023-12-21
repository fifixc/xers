import { getStatsCard, getStatsData } from '../src/services/index.js';
import { isValidTheme, isValidUsername } from '../src/utils/index.js';


type Params = {
    query: StatsQuery;
    set: any;
}
export default async ({ query, set }: Params) => {
    let { username, theme } = query;
    try {
        if (theme && !isValidTheme(theme)) throw Error('That theme does not exist!');
        if (!username && !isValidUsername(username)) throw Error('That username does not exist!');
        let stats = await getStatsData(username);
        let statsCard = getStatsCard(stats, theme);
        set.headers['Content-Type'] = 'image/svg+xml';
        
        return statsCard;
    } catch (error) {
        console.log(error);
    }
}