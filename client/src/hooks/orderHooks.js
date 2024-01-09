import { useMutation, useQuery } from '@tanstack/react-query';
import apiClient from '../apiClient';

export const useGetOrderDetailsQuery = (id) =>
  useQuery({
    queryKey: ['orders', id],
    queryFn: async () => {
      const response = await apiClient.get(`api/orders/${id}`);
      return response.data;
    },
  });

export const useGetPaypalClientIdQuery = () =>
  useQuery({
    queryKey: ['paypal-clientId'],
    queryFn: async () => {
      const response = await apiClient.get('/api/keys/paypal');
      return response.data;
    },
  });

export const usePayOrderMutation = () =>
  useMutation({
    mutationFn: async (details) => {
      const response = await apiClient.put(`api/orders/${details.orderId}/pay`, details);
      return response.data;
    },
  });

export const useCreateOrderMutation = () =>
  useMutation({
    mutationFn: async (order) => {
      const response = await apiClient.post(`api/orders`, order);
      return response.data;
    },
  });

export const useGetOrderHistoryQuery = () =>
  useQuery({
    queryKey: ['order-history'],
    queryFn: async () => {
      const response = await apiClient.get('/api/orders/mine');
      return response.data;
    },
  });
