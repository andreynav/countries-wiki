import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { CountryT } from '../Country/Country'

export const Card = ({ country }: { country: CountryT }) => {
  return (
    <StyledNavLink to={`/country/${country.name.official}`}>
      <CardContainer>
        <FlagImage src={country?.flags?.png} alt={'flag'} />
        <CardData>
          <div>{`${country?.name.common}`}</div>
          <div>
            <b>{'Population:'}</b> {country?.population}
          </div>
          <div>
            <b>{'Capital:'}</b> {country.capital ? `${country?.capital[0]}` : `no data`}
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
`

const CardContainer = styled.div`
  display: grid;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  cursor: pointer;

  //justify-items: center;
  justify-self: center;
  width: 300px;

  NavLink a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 767px) {
    //width: 300px;
  }

  @media (max-width: 480px) {
    //width: 300px;
  }
`

const FlagImage = styled.img`
  display: grid;
  border-radius: var(--radii) var(--radii) 0 0;
  width: 100%;
  height: 150px;

  @media (max-width: 767px) {
    //width: 100%;
  }

  @media (max-width: 480px) {
    //width: 100%;
  }
`
const CardData = styled.div`
  display: grid;
  padding: 1rem 2rem;

  & div:first-of-type {
    font-size: var(--fs-lg);
    font-weight: var(--fw-normal);
    padding: 1rem 0;
  }

  & div {
    padding: 0.5rem 0;
  }
`
