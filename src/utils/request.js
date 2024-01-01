import { GITHUB_API } from '@/config';
export const request = async (headers, data) => {
    const response = await fetch(GITHUB_API, {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    });
    return await response.json();
};
