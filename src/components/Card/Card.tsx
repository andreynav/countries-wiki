import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { CountryT } from '../../types/types'

export const Card = ({ country }: { country: CountryT }) => {
  return (
    <StyledNavLink to={`/country/${country.name.official}`}>
      <CardContainer>
        <FlagImage src={country?.flags?.png} alt={'flag'} />
        <CardData>
          <div>{`${country?.name.common}`}</div>
          <div>
            <b>{'Capital:'}</b> {country.capital ? `${country?.capital[0]}` : `no data`}
          </div>
          <div>
            <b>{'Population:'}</b> {country?.population}
          </div>
          <div>
            <b>{'Region:'}</b> {country?.region}
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

const CardContainer = styled.div`
  display: grid;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  cursor: pointer;
  width: 300px;
  min-height: 415px;

  NavLink a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 480px) {
  }
`

const FlagImage = styled.img`
  display: grid;
  border-radius: var(--radii) var(--radii) 0 0;
  width: 100%;
  height: 150px;

  @media (max-width: 767px) {
  }

  @media (max-width: 480px) {
  }
`
const CardData = styled.div`
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
`
