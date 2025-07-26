import { useRouter } from '@tanstack/react-router'
import { Button } from '../ui'
import { MainLayout } from './main-layout'

export const NotFound = () => {
  const router = useRouter()
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">Oops! Page not found.</p>
        <Button className="mt-6" onClick={() => router.navigate({ to: '/' })}>
          Go Home
        </Button>
      </div>
    </MainLayout>
  )
}
