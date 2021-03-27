import axios from '../../../axios';
import { AxiosResponse } from 'axios';
import { ILoginInput, IRegisterInput } from './types';

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

export function registerParticipant(
    input: IRegisterInput
): Promise<AxiosResponse<any>> {
    return axios.post(
        'register/participant', 
        input
    );
}

export function registerVisitor(
    input: IRegisterInput
): Promise<AxiosResponse<any>> {
    return axios.post(
        'register/participant', 
        input
    );
}