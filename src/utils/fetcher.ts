import { request } from '@/utils';
import { GITHUB_AUTH_TOKEN } from '@/config';

export const fetcher = (variables: Object, query: string) => {
    return request({ Authorization: `bearer ${GITHUB_AUTH_TOKEN}` }, { query, variables });
};