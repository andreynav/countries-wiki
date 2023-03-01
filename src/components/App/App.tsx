import styled from 'styled-components'

import { Controls } from '../Controls/Controls'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'

export const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <Controls />
      </Main>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: grid;

  //@media (max-width: 768px) {
  //grid-template-columns: 1rem minmax(20rem, 1fr) 1rem;
  //}

  //@media (max-width: 480px) {
  //grid-template-rows: 3rem auto 1fr;
  //grid-template-columns: 1rem minmax(10rem, 1fr) 1rem;
  //}
`
