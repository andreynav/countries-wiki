import { IoEarth } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NotFound = ({ setSearch }: any) => {
  return (
    <NotFoundWrapper>
      <EarthContainer>
        <div>DO NOT</div>
        <IoEarth size={64} />
        <div>FOUND</div>
      </EarthContainer>
      <div>
        {'go to '}
        <NavLink to="/" onClick={() => setSearch('')}>
          {'home page'}
        </NavLink>
      </div>
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

  & div:last-child {
    line-height: 64px;
  }

  & a {
    color: var(--colors-link);
    text-decoration: none;
    font-weight: normal;
  }
`

const EarthContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 64px auto;
  align-items: center;
`
