import { PropsWithChildren } from 'react'
import styled from 'styled-components'

import { Container } from '../Container/Container'

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <MainWrapper>
      <Container>{children}</Container>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: grid;
  padding: 2rem 0;

  @media (max-width: 767px) {
    //grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    //grid-template-columns: 1fr;
  }
`
