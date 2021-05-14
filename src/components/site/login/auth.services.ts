import axios from '../../../axios';
import { AxiosResponse } from 'axios';
import { ILoginInput } from './types';

export function login(
    input: ILoginInput
): Promise<AxiosResponse<any>> {
    console.log('service login')
    return axios.post(
        'auth/login', 
        {
            'username': input.email,
            'password': input.password
        } 
    );
}
