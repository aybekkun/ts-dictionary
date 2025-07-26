import { type FC } from 'react'
import { Logo } from './logo'
import { Link } from '@tanstack/react-router'
import { ROUTES } from '@/shared/configs/routes.config'

export const Header: FC = () => {
  return (
    <header className="bg-white border-b border-blue-100">
      <div className="container flex items-center justify-between">
        <div className="flex items-center h-16 ">
          <Logo />
        </div>
        <nav className="">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                className="font-medium items-center justify-center text-blue-700 p-2 hover:text-blue-900 transition-colors"
                to={ROUTES.HOME}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-medium flex items-center justify-center text-blue-700 p-2 hover:text-blue-900 transition-colors"
                to={ROUTES.WORLD_LIST}
              >
                Word List
              </Link>
            </li>
            <li>
              <Link
                className="font-medium border items-center justify-center text-blue-700 p-2 rounded-lg border-blue-700 hover:text-blue-900 transition-colors"
                to={ROUTES.ABOUT}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
