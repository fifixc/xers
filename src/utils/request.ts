import { GITHUB_API } from '@/config.js';

export const request = async (headers: Record<string, string>, data: Object) => {
    const response = await fetch(GITHUB_API, {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    });
    return await response.json();
}