import { SearchWordList, WordCard } from '@/components/common'
import { Pagination } from '@/components/ui'
import { useFilters } from '@/shared/hooks'
import { createFileRoute } from '@tanstack/react-router'
type FilterParams = {
  page: number
  limit:number
}
export const Route = createFileRoute('/_layout/word-list/')({
  component: WordListComponent,
  validateSearch: () => ({}) as FilterParams,
})

function WordListComponent() {
  const { filters, setFilters } = useFilters(Route.id)
  return (
    <>
      <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
        World List
      </h2>
      <SearchWordList />
      <div className="grid mt-20 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
      </div>
      <Pagination
        totalPages={100}
        currentPage={filters.page ? filters.page : 1}
        onPageChange={(page) => setFilters({ page: page })}
      />
    </>
  )
}
