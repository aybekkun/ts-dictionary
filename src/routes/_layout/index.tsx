import {
  PopularSearches,
  SearchSection,
  VideoSection,
  WordOfTheDay,
} from '@/components/common'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <>
      <div className="text-center mb-10 mt-6">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-900 mb-4">
          Túsindirme sózlik
        </h1>
        <p className="text-xl text-blue-700 max-w-2xl mx-auto">
          Discover the meaning, pronunciation, and usage of words in our
          comprehensive dictionary
        </p>
      </div>
      <SearchSection />
      <div className="grid lg:grid-cols-2 gap-8 py-16">
        <WordOfTheDay />
        <VideoSection />
      </div>
      <PopularSearches />
    </>
  )
}
