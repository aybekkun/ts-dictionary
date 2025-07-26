import { RelatedList, WordExamples, WordInfoCard } from '@/components/common'
import { Button } from '@/components/ui'
import { ROUTES } from '@/shared/configs/routes.config'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/_layout/word/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='space-y-4'>
      <Button variant="outline" className="mb-6 hover:bg-blue-50" asChild>
        <Link to={ROUTES.WORLD_LIST}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Word List
        </Link>
      </Button>
      <WordInfoCard />
      <WordExamples />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <RelatedList variant="synonyms" title="Ssdss" />
        <RelatedList variant="antonyms" title="Ssdsdada" />
      </div>
    </div>
  )
}
