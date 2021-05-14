import axios from '../../../axios';
import { AxiosResponse } from 'axios';
import { RegisterUserDto } from './types';

export function registerParticipant(
    input: RegisterUserDto
): Promise<AxiosResponse<any>> {
    return axios.post(
        'register/participant', 
        input
    );
}

export function registerVisitor(
    input: RegisterUserDto
): Promise<AxiosResponse<any>> {
    return axios.post(
        'register/visitor', 
        input
    );
}