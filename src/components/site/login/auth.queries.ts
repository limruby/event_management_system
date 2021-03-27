import {useMutation, useQuery, UseMutationOptions} from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { login, registerParticipant, registerVisitor } from './auth.services';

export function useLogin() {
  return useMutation(login);
}

export function useRegisterParticipant() {
    return useMutation(registerParticipant);
}

export function useRegisterVisitor() {
    return useMutation(registerVisitor);
}
