import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Controls } from '../Controls/Controls'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Card, CountryT } from './Card/Card'

const countryApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  withCredentials: false
})

type RegionT = {
  value: string
  label: string
}

export const App = () => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState<RegionT>({ value: 'America', label: 'America' })
  const [dataApi, setDataApi] = useState([])

  const getRegions = async (region: any) => {
    return countryApi.get(`region/${region}`).then(async (response) => {
      const data = await response.data
      setDataApi(data)
    })
  }

  useEffect(() => {
    getRegions(region.value)
  }, [region, setRegion])

  return (
    <AppWrapper>
      <Header />
      <Main>
        <Controls search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
        <CardList>
          {dataApi.map((country: CountryT) => {
            return <Card key={country.name.common} country={country} />
          })}
        </CardList>
      </Main>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: grid;
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
