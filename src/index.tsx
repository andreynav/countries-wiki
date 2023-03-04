import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './components/App/App'
import { AppStylesProvider } from './styles/AppStylesProvider'

const RootComponent = () => {
  return (
    <StrictMode>
      <AppStylesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppStylesProvider>
    </StrictMode>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as HTMLElement)
root.render(<RootComponent />)
