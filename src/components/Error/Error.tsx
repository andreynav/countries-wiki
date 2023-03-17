import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const Error = ({ children }: PropsWithChildren) => {
  return <StyledError>{children}</StyledError>
}

const StyledError = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 0;
  color: var(--colors-link);
`
