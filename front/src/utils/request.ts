import { API_URL } from "../consts/api";

export type RequestParams = {
    route: string
    method: string,
    body?: Record<string, string | number | object>
    token?: string | undefined
}

export const request = async ({ route, method, body, token }: RequestParams) => {
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...token && {'Authorization': `Bearer ${token}`}
        },
        ...body && { body: JSON.stringify(body) }
    };
    
    try {
        const res = await fetch(`${API_URL}${route}`, options);
        
        return await res.json();
    } catch (err) {
        
        return { error: true }
    }
}