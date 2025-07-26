import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from './integrations/providers'
import './styles.css'

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Providers />
    </StrictMode>,
  )
}
