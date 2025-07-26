import { Button } from '@/components/ui/button'
import { cn } from '@/shared/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i)

const DOTS = '...'

function getPaginationRange(
  current: number,
  total: number,
): (number | typeof DOTS)[] {
  const siblingCount = 1
  const totalVisible = siblingCount * 2 + 5 // first, last, current, two siblings, and two dots

  if (total <= totalVisible) {
    return range(1, total)
  }

  const leftSibling = Math.max(current - siblingCount, 2)
  const rightSibling = Math.min(current + siblingCount, total - 1)

  const showLeftDots = leftSibling > 2
  const showRightDots = rightSibling < total - 1

  const pages: (number | typeof DOTS)[] = [1]

  if (showLeftDots) {
    pages.push(DOTS)
  }

  pages.push(...range(leftSibling, rightSibling))

  if (showRightDots) {
    pages.push(DOTS)
  }

  pages.push(total)

  return pages
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}: PaginationProps) => {
  const paginationRange = getPaginationRange(currentPage, totalPages)

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {paginationRange.map((item, index) =>
        item === DOTS ? (
          <span key={`dots-${index}`} className="px-2 text-muted-foreground">
            {DOTS}
          </span>
        ) : (
          <Button
            key={item}
            variant={item === currentPage ? 'default' : 'outline'}
            size="icon"
            className={cn('w-8 h-8 text-sm', {
              'bg-primary text-white': item === currentPage,
            })}
            onClick={() => onPageChange(item)}
          >
            {item}
          </Button>
        ),
      )}

      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )
}
