import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { CountryT } from '../../types/types'
import { splitNumber } from '../../utils/splitNumber'

export const Card = ({ country }: { country: CountryT }) => {
  const { name, capital, population, area, flags } = country

  return (
    <StyledNavLink to={`/country/${name.official}`}>
      <CardContainer>
        <FlagImage src={flags?.png} alt={'flag'} />
        <CardData>
          <div>{name.common}</div>
          <div>
            <b>Capital:</b> {capital?.[0] || `no data`}
          </div>
          <div>
            <b>Population:</b> {splitNumber(population)}
          </div>
          <div>
            <b>Area:</b> {splitNumber(area)} km<sup>2</sup>
          </div>
        </CardData>
      </CardContainer>
    </StyledNavLink>
  )
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  justify-self: center;
`

const CardContainer = styled.article`
  display: grid;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  cursor: pointer;
  height: 100%;
  width: 300px;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const FlagImage = styled.img`
  display: grid;
  border-radius: var(--radii) var(--radii) 0 0;
  width: 100%;
  height: 150px;
`
const CardData = styled.section`
  display: grid;
  padding: 1rem 2rem;
  align-self: start;

  & div:first-of-type {
    font-size: var(--fs-lg);
    font-weight: var(--fw-normal);
    padding: 1rem 0;
  }

  & div {
    padding: 0.5rem 0;
  }

  & div b {
    font-weight: var(--fw-normal);
  }

  & div sup {
    font-size: var(--fs-esm);
  }
`
