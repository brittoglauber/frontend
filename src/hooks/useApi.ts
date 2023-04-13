import axios from "axios"

const api = axios.create({
    baseURL: 'http://18.231.164.126:5000/'
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (username: string, password: string) => {
        const response = await api.post('/signin', { username, password });
        return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response
    }
})