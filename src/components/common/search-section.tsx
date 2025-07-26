import { cn } from '@/shared/lib/utils'
import { Search } from 'lucide-react'
import { type FC } from 'react'
import { Button, SearchInput } from '../ui'

interface Props {
  className?: string
}

export const SearchSection: FC<Props> = ({ className = `` }) => {
  return (
    <div
      className={cn(
        'relative bg-white rounded-full max-w-2xl mx-auto shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300 w-full',
        className,
      )}
    >
      <div className="flex items-center p-1">
        <div className="flex-1">
          <SearchInput />
        </div>
        <div className="flex items-center gap-2 pl-2 pr-2">
          <Button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-full h-10 w-10 p-0">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {/*    <div className="absolute bg-white top-full left-0 right-0 mt-1 shadow-lg border border-gray-200 rounded-2xl overflow-hidden z-50">
        <ul className="py-2">
          <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center">
            <Search className="h-4 w-4 text-gray-400 mr-3" />
            <span>{'text'}</span>
          </li>
          <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center">
            <Search className="h-4 w-4 text-gray-400 mr-3" />
            <span>{'text'}</span>
          </li>
          <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center">
            <Search className="h-4 w-4 text-gray-400 mr-3" />
            <span>{'text'}</span>
          </li>
        </ul>
      </div> */}
    </div>
  )
}
