import { useMutation } from '@tanstack/react-query';
import apiClient from '../apiClient';

export const useSigninMutation = () =>
  useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await apiClient.post('api/users/signin', {
        email,
        password,
      });
      return response.data;
    },
  });

export const useSignupMutation = () =>
  useMutation({
    mutationFn: async ({ name, email, password }) => {
      const response = await apiClient.post('api/users/signup', {
        name,
        email,
        password,
      });
      return response.data;
    },
  });

export const useUpdateProfileMutation = () =>
  useMutation({
    mutationFn: async ({ name, email, password }) => {
      const response = await apiClient.put('api/users/profile', {
        name,
        email,
        password,
      });
      return response.data;
    },
  });
