import { RouterProvider } from '@tanstack/react-router'
import type { FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Toaster } from 'sonner'
import i18n from '../i18n'
import { router } from './router'
import { QueryProvider } from './tanstack-query/root-provider'

// Create a new router instance

export const Providers: FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryProvider>
        <Toaster />
        <RouterProvider router={router} context={{ auth: undefined }} />
      </QueryProvider>
    </I18nextProvider>
  )
}
