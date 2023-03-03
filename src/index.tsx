import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components/App/App'
import { AppStylesProvider } from './styles/AppStylesProvider'

const RootComponent = () => {
  return (
    <StrictMode>
      <AppStylesProvider>
        <App />
      </AppStylesProvider>
    </StrictMode>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as HTMLElement)
root.render(<RootComponent />)
