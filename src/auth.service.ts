import axios from './axios';
import { useLocalStorage } from './local.storage';

export class AuthService {
    private static instance: AuthService;

    private constructor() {
    }

    public static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }

        return AuthService.instance;
    }

    private setAccessToken(value: string | null) {
        if(value == null)
            return localStorage.removeItem('access_token')
        localStorage.setItem('access_token', value);
    }

    private setRefreshToken(value: string | null) {
        if(value == null)
            return localStorage.removeItem('refresh_token')
        localStorage.setItem('refresh_token', value);
    }

    private getAccessToken() : string | null {
        return localStorage.getItem('access_token');
    }

    private getRefreshToken() : string | null {
        return localStorage.getItem('refresh_token');
    }

    public setJwtToken(access?: string, refresh?: string) {
        this.setAccessToken(access?? null);
        this.setRefreshToken(refresh?? null);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getAccessToken();
    }

    public refreshJwtToken() {
        let config = {
            headers: {
                Authorization: 'Bearer ' + this.getRefreshToken(),
            }
        }
        return axios.get(
            'auth/login', 
            config
        );
    }
}