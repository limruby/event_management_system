import {useMutation, useQuery, UseMutationOptions} from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { login } from './auth.services';

export function useLogin() {
  return useMutation(login);
}
