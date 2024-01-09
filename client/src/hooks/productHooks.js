import { useQuery } from '@tanstack/react-query';
import apiClient from '../apiClient';

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await apiClient.get('api/products');
      return response.data;
    },
  });

export const useGetProductDetailsBySlugQuery = (slug) =>
  useQuery({
    queryKey: ['products', slug],
    queryFn: async () => {
      const response = await apiClient.get(`api/products/slug/${slug}`);
      return response.data;
    },
  });

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await apiClient.get('/api/products/categories');
      return response.data;
    },
  });
