import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';

export const axiosInstance = axios.create({
  baseURL:
    'https://private-anon-8c50a0b80f-blissrecruitmentapi.apiary-mock.com',
});

export const queryClient = new QueryClient();

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
