import { App } from '../components/App/App'
import { GlobalStyles } from './GlobalStyles'

type ChildrenT = { children: ReturnType<typeof App> }

export const AppStylesProvider = ({ children }: ChildrenT) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
