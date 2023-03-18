import { IoEarth } from 'react-icons/io5'
import styled from 'styled-components'

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <EarthContainer>
        <div>DO NOT</div>
        <IoEarth size={64} />
        <div>FOUND</div>
      </EarthContainer>
    </NotFoundWrapper>
  )
}

const NotFoundWrapper = styled.div`
  display: grid;
  align-self: center;
  justify-items: center;
  align-items: center;
  background-color: var(--colors-bg);
  color: var(--color-text);
  font-weight: bold;
`

const EarthContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 64px auto;
  align-items: center;
`
