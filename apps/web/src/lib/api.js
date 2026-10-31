
import { cookies } from "next/headers"
import { Config } from "../config/config";


const createClient = (withAuth = false) => {

    const request = async (endpoint, options = {}) => {

        let token = null;

        if (withAuth) {
            const cookieStore = await cookies();
            token = cookieStore.get("accessToken")?.value;
        }

        const response = await globalThis.fetch(`${Config.apiUrl}${endpoint}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
                ...(token && {
                    Authorization: `Bearer ${token}`,
                }),
            },
        }
        );

        const data = await response.json().catch(() => null);

        if (!response.ok) {
            throw new Error(
                data?.message || `Erreur HTTP ${response.status}`
            );
        }

        return data;
    };

    return {
        request,

        get: (endpoint, options = {}) => request(endpoint, { 
            ...options, 
            method: "GET" 
        }),

        post: (endpoint, body, options = {}) => request(endpoint, {
            ...options,
            method: "POST",
            body: JSON.stringify(body),
        }),

        put: (endpoint, body, options = {}) => request(endpoint, {
            ...options,
            method: "PUT",
            body: JSON.stringify(body),
        }),

        patch: (endpoint, body, options = {}) => request(endpoint, {
            ...options,
            method: "PATCH",
            body: JSON.stringify(body),
        }),

        delete: (endpoint, options = {}) => request(endpoint, { 
            ...options, 
            method: "DELETE" 
        }),
    };
};

export const Api = {
    fetch: createClient(false),
    fetchWithAuth: createClient(true),
};
