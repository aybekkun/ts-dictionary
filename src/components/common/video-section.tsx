import { cn } from '@/shared/lib/utils'
import { Volume2 } from 'lucide-react'
import { type FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui'

interface Props {
  className?: string
}

export const VideoSection: FC<Props> = ({ className = `` }) => {
  return (
    <Card className={cn('shadow-xl border-blue-100', className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-900 flex items-center gap-2">
          <Volume2 className="h-6 w-6" />
          Featured Explanation
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="rounded-2xl  aspect-video overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UT9ndxZPXxY?si=UNn4kCU4FN86Bk6V"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}
