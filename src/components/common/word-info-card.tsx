import { type FC } from 'react'
import { Card, CardContent, CardHeader } from '../ui'
import { cn } from '@/shared/lib/utils'
import { Badge } from '../ui/badge'
import { Volume2 } from 'lucide-react'

interface Props {
  className?: string
}

export const WordInfoCard: FC<Props> = ({ className = `` }) => {
  return (
    <Card className={cn(' ', className)}>
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-3xl md:text-5xl font-bold text-blue-900 mb-2">
          Simple Fedelety
        </h3>
        <div className="flex gap-4 items-center">
          <Volume2 className="h-4 w-4 text-blue-600 hover:text-blue-800 transition-colors" />
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 text-xs"
          >
            {'category'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600  text-md leading-relaxed line-clamp-3">
          asdasddasasdasd a sdasd asd asddsa asd
        </p>
      </CardContent>
    </Card>
  )
}
