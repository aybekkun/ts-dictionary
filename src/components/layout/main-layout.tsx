import type { FC, PropsWithChildren } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <main className="flex-1 container py-8 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="text-[20rem] font-bold text-blue-100/30 select-none leading-none">
            Aa
          </div>
        </div>
        <div className="z-10 relative">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
