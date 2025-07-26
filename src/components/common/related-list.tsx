import { type FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui'

import { cn } from '@/shared/lib/utils'
import { Badge } from '../ui/badge'
import { Link } from '@tanstack/react-router'
import { ROUTES } from '@/shared/configs/routes.config'

interface Props {
  className?: string
  title: string
  variant: 'synonyms' | 'antonyms'
}
const synonyms = ['chance', 'fortune', 'luck', 'coincidence', 'fate']
export const RelatedList: FC<Props> = ({
  className = ``,
  title = '',
  variant = 'synonyms',
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-blue-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {synonyms.map((synonym, index) => (
            <Badge
              key={index}
              className={cn({
                'text-green-900 bg-green-100 ': variant === 'synonyms',
                'text-red-900 bg-red-100 ': variant === 'antonyms',
              })}
              asChild
            >
              <Link to={ROUTES.WORD_SLUG}>{synonym}</Link>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
