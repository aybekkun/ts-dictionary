import { type FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui'
import { BookOpen } from 'lucide-react'

interface Props {
  className?: string
}
const examples = [
  'A fortunate stroke of serendipity brought the two old friends together after twenty years.',
  'The discovery was pure serendipity - they were looking for something completely different.',
  'Meeting her future business partner at that coffee shop was a moment of serendipity.',
]

export const WordExamples: FC<Props> = ({ className = `` }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900">
          <BookOpen className="h-5 w-5" />
          Examples
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {examples.map((example, index) => (
            <div key={index} className="p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700 italic">"{example}"</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
