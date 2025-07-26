import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 0
    },
  },
})

export function getContext() {
  return {
    queryClient,
  }
}

export function QueryProvider({ children }: { children: React.ReactNode }) {
  
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
