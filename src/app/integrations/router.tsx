import { routeTree } from '@/routeTree.gen'
import { createRouter } from '@tanstack/react-router'
import { getContext } from './tanstack-query/root-provider'
import { NotFound } from '@/components/layout'
export const router = createRouter({
  routeTree,
  context: {
    ...getContext(),
    auth: undefined!,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  defaultNotFoundComponent: NotFound,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
