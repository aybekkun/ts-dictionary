import { cn } from '@/shared/lib/utils'
import { type FC } from 'react'
import { Button, Card, CardContent, CardHeader, CardTitle } from '../ui'
import { Calendar, ExternalLink, Volume2 } from 'lucide-react'

interface Props {
  className?: string
}

export const WordOfTheDay: FC<Props> = ({ className = `` }) => {
  const todayWord = {
    word: 'Ephemeral',
    pronunciation: '/əˈfem(ə)rəl/',
    partOfSpeech: 'adjective',
    definition: 'Lasting for a very short time; transitory',
    example:
      'The beauty of cherry blossoms is ephemeral, lasting only a few weeks each spring.',
    etymology: 'From Greek ephēmeros, meaning "lasting only a day"',
  }
  return (
    <Card
      className={cn(
        'bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0 shadow-xl',
        className,
      )}
    >
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-5 w-5" />
          <span className="text-blue-100 text-sm font-medium">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        <CardTitle className="text-2xl font-bold">Word of the Day</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-3xl font-bold">{todayWord.word}</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-200 hover:text-white hover:bg-blue-700"
            >
              <Volume2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-blue-200 font-mono">
              {todayWord.pronunciation}
            </span>
            <span className="bg-blue-500 text-white">
              {todayWord.partOfSpeech}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-blue-100 leading-relaxed">
            <strong>Definition:</strong> {todayWord.definition}
          </p>

          <div className="bg-blue-700/50 rounded-lg p-3">
            <p className="text-blue-100 italic text-sm">
              <strong>Example:</strong> "{todayWord.example}"
            </p>
          </div>

          <p className="text-blue-200 text-sm">
            <strong>Etymology:</strong> {todayWord.etymology}
          </p>
        </div>

        <Button variant="secondary" className='w-full'>
          Learn More
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}
