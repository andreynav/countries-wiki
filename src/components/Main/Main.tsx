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
  padding: 2rem;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`
