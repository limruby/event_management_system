import {useMutation, useQuery, UseMutationOptions} from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { registerParticipant, registerVisitor } from './auth.services';

export function useRegisterParticipant() {
    return useMutation(registerParticipant);
}

export function useRegisterVisitor() {
    return useMutation(registerVisitor);
}
