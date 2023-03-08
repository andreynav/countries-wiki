import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { useDebounce } from '../../hooks/useDebounce'
import { Card } from '../Card/Card'
import { Container } from '../Container/Container'
import { Controls } from '../Controls/Controls'
import { CountryT } from '../Country/Country'

export const countryApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  withCredentials: false
})

export type RegionT = {
  value: string
  label: string
}

export const Main = () => {
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<RegionT>({ value: 'America', label: 'America' })
  const [countriesData, setCountriesData] = useState<Array<CountryT>>([])
  const debouncedSearch = useDebounce(search)

  const getRegions = useCallback((regionValue: string) => {
    void countryApi.get<CountryT[]>(`region/${regionValue}`).then((response) => {
      const data = response.data
      setCountriesData(data)
    })
  }, [])

  useEffect(() => {
    getRegions(region.value)
  }, [region, search, getRegions])

  const searchCountries = useCallback((searchValue: string) => {
    if (searchValue.length === 0) return
    void countryApi.get<CountryT[]>(`/name/${searchValue}`).then((response) => {
      const data = response.data
      setCountriesData(data)
    })
  }, [])

  useEffect(() => {
    searchCountries(debouncedSearch)
  }, [debouncedSearch, searchCountries])

  return (
    <MainWrapper>
      <Container>
        <Controls search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
        <CardList>
          {countriesData.map((country: CountryT) => {
            return <Card key={country.name.common} country={country} />
          })}
        </CardList>
      </Container>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: grid;
  padding: 2rem 0;

  @media (max-width: 767px) {
  }

  @media (max-width: 480px) {
  }
`
const CardList = styled.div`
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
