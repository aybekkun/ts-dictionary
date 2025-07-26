import { ROUTES } from '@/shared/configs/routes.config'
import { Link } from '@tanstack/react-router'
import { type FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui'
import { Badge } from '../ui/badge'

interface Props {
  className?: string
}

export const WordCard: FC<Props> = ({ className = `` }) => {
  return (
    <Link to={ROUTES.WORD_SLUG} params={{ slug: 'slug' }} className={className}>
      <Card className="h-full rounded-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-blue-100 hover:border-blue-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-blue-900">
              {'Soz'}
            </CardTitle>
          </div>
          <div className="flex gap-2">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800 text-xs"
            >
              {'category'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {'asdd'}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
