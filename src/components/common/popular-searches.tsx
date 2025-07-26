import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function PopularSearches() {
  const popularWords = [
    { word: 'Serendipity', searches: 1250 },
    { word: 'Ephemeral', searches: 980 },
    { word: 'Ubiquitous', searches: 875 },
    { word: 'Mellifluous', searches: 720 },
    { word: 'Petrichor', searches: 650 },
    { word: 'Sonder', searches: 580 },
    { word: 'Wanderlust', searches: 520 },
    { word: 'Eloquent', searches: 480 },
  ]

  return (
    <Card className="mt-16 shadow-xl border-blue-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-900 flex items-center gap-2">
          <TrendingUp className="h-6 w-6" />
          Popular Searches
        </CardTitle>
        <p className="text-blue-700">Most searched words this week</p>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {popularWords.map((item, index) => (
            <Link key={item.word} to={`/`}>
              <div className="group p-3 rounded-lg border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-blue-900 group-hover:text-blue-700">
                    {item.word}
                  </span>
                  <span className="text-xs border-blue-300 text-blue-600">
                    #{index + 1}
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {item.searches.toLocaleString()} searches
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
