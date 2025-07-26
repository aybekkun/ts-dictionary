import { useState } from 'react'
import { Filter } from 'lucide-react'
import { Button } from './button'
import { cn } from '@/shared/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'

interface FilterOption<T> {
  label: string
  value: T
  icon?: React.ComponentType<{ className?: string }>
}

interface FilterDropdownProps<T extends string | number | boolean> {
  className?: string
  title?: string
  options: FilterOption<T>[]
  setFilter: (value: T | undefined) => void
  initialValue?: T
}

export const FilterDropdown = <T extends string | number | boolean>({
  className = '',
  title = 'Фильтры',
  options,
  setFilter,
  initialValue,
}: FilterDropdownProps<T>) => {
  const [selected, setSelected] = useState<T | null>(initialValue ?? null)

  const handleChange = (val: string) => {
    const match = options.find((opt) => opt.value.toString() === val)
    const newValue = match?.value ?? null
    setSelected(newValue)
    setFilter(newValue ?? undefined)
  }

  const isActive =
    selected !== null &&
    options.some((opt) => opt.value.toString() === selected.toString())

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn('h-8 border-dashed', className)}
        >
          <Filter
            className="mr-2 h-4 w-4"
            fill={isActive ? 'bg-primary' : 'none'}
          />
          <span className="hidden sm:block">{title}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[150px] p-0" align="start">
        <DropdownMenuRadioGroup
          value={selected?.toString() ?? ''}
          onValueChange={handleChange}
        >
          {options.map(({ label, value, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={value.toString()}
              value={value.toString()}
              className="capitalize cursor-pointer"
            >
              {Icon && <Icon className="mr-2 h-4 w-4" />}
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-0">
          <Button
            variant="link"
            size="sm"
            className="text-xs w-full"
            onClick={() => handleChange('')}
          >
            clear
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
