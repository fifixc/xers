import { request } from './request.js';
import { GITHUB_AUTH_TOKEN } from '@/config.js';

export const fetcher = (variables: Object, query: string) => {
    return request({ Authorization: `bearer ${GITHUB_AUTH_TOKEN}` }, { query, variables });
};