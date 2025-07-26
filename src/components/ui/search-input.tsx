import { cn } from '@/shared/lib/utils'
import { Search } from 'lucide-react'
import { type FC } from 'react'

interface Props {
  className?: string
}

export const SearchInput: FC<Props> = ({ className = `` }) => {
  return (
    <div className={cn('relative w-full', className)}>
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
      <input
        type="text"
        className="pl-12 pr-4 h-10 py-3 md:py-6 md:h-14 w-full border-none text-lg border-0 rounded-full focus:ring-0 focus:outline-none"
      />
    </div>
  )
}
