import { request } from './request';
import { GITHUB_AUTH_TOKEN } from '@/config';
export const fetcher = (variables, query) => {
    return request({ Authorization: `bearer ${GITHUB_AUTH_TOKEN}` }, { query, variables });
};
