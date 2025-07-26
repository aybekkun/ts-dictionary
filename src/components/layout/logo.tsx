import { Link } from '@tanstack/react-router'
import { type FC } from 'react'

interface Props {
  className?: string
}

export const Logo: FC<Props> = ({ className = `` }) => {
  return (
    <div className={className}>
      <Link
        to="/"
        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
      >
        <svg
          width="32"
          height="37"
          viewBox="0 0 32 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7006 5.93143L14.9656 8.25996V17.1119L18.6495 21.9797L24.5846 24.0518V27.2751L21.3612 26.1497V24.5126L14.9656 22.2796V26.6802L18.6495 31.5991L27.3989 34.6537L31.0828 32.307V23.5573L27.3562 18.5725L21.3612 16.4796V13.307L24.5846 14.4324V16.0187L31.0828 18.2874V13.8357L27.3478 8.95008L18.7006 5.93143Z"
            fill="#5182EF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7148 2.98539L19.2158 7.23605V36.391L10.7148 32.1403V7.1073H0.4104V0.280701H29.5203V7.1073H21.8983V5.20972L10.7148 2.98539Z"
            fill="#5182EF"
          />
        </svg>
        <span className="text-2xl font-bold hidden md:block text-blue-900 text-nowrap">
         Túsindirme sózlik
        </span>
      </Link>
    </div>
  )
}

export const LogoFooter: FC<Props> = ({ className = `` }) => {
  return (
    <div className={className}>
      <Link
        to="/"
        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
      >
        <svg
          width="32"
          height="37"
          viewBox="0 0 32 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7006 5.93143L14.9656 8.25996V17.1119L18.6495 21.9797L24.5846 24.0518V27.2751L21.3612 26.1497V24.5126L14.9656 22.2796V26.6802L18.6495 31.5991L27.3989 34.6537L31.0828 32.307V23.5573L27.3562 18.5725L21.3612 16.4796V13.307L24.5846 14.4324V16.0187L31.0828 18.2874V13.8357L27.3478 8.95008L18.7006 5.93143Z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7148 2.98539L19.2158 7.23605V36.391L10.7148 32.1403V7.1073H0.4104V0.280701H29.5203V7.1073H21.8983V5.20972L10.7148 2.98539Z"
            fill="#fff"
          />
        </svg>
        <span className="text-2xl font-bold text-blue-50 text-nowrap">
          Túsindirme sózlik
        </span>
      </Link>
    </div>
  )
}
