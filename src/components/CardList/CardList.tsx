import styled from 'styled-components/'

import { Card } from '../Card/Card'
import { CountryT } from '../Country/Country'

export const CardList = ({ countries }: { countries: CountryT[] }) => {
  return (
    <StyledCardList>
      {countries.map((country: CountryT) => {
        return <Card key={country.name.common} country={country} />
      })}
    </StyledCardList>
  )
}

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  justify-content: space-between;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    justify-content: space-between;
  }
`
