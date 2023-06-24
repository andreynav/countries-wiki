import styled from 'styled-components/'

import { CountryT } from '../../types/types'
import { Card } from '../Card/Card'

export const CardList = ({ countries }: { countries: CountryT[] }) => {
  return (
    <StyledCardList data-cy="countries-list">
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
  padding-bottom: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
