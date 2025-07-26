import { cn } from '@/shared/lib/utils'
import { ArrowDownZA, ArrowUpAZ, Search } from 'lucide-react'
import { type FC } from 'react'
import { Button, FilterDropdown, SearchInput } from '../ui'

interface Props {
  className?: string
}

export const SearchWordList: FC<Props> = ({ className = `` }) => {
  return (
    <div
      className={cn(
        'relative bg-white rounded-full max-w-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300 w-full',
        className,
      )}
    >
      <div className="flex items-center p-1 flex-wrap">
        <div className="flex-1 flex items-center">
          <SearchInput />
          <Button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-full h-10 w-10 p-0">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <div className=" items-center gap-2 pl-2 hidden sm:flex pr-2">
          <FilterDropdown
            options={[
              { label: 'A-z', value: 'word', icon: ArrowUpAZ },
              { label: 'Z-a', value: '-word', icon: ArrowDownZA },
            ]}
            setFilter={() => {}}
            title="Filter"
          />
          <FilterDropdown
            options={[
              { label: 'A-z', value: 'word' },
              { label: 'Z-a', value: '-word' },
              { label: 'Z-a', value: '-word' },
              { label: 'Z-a', value: '-word' },
              { label: 'Z-a', value: '-word' },
            ]}
            setFilter={() => {}}
            title="Filter"
          />
        </div>
      </div>
    </div>
  )
}
