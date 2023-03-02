import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Controls } from '../Controls/Controls'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'

const countryApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  withCredentials: false
})

type RegionT = {
  value: string
  label: string
}

type CountryT = {
  name: { common: string }
  flags: { png: string }
  population: number
  capital: Array<string>
  region: string
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
        <div>
          {dataApi.map((country: CountryT) => {
            return (
              <div key={country.name.common}>
                <img src={country?.flags?.png} alt={'flag'} style={{ height: '100px' }}></img>
                <div>{`Name: ${country?.name.common}`}</div>
                <div>{`Population: ${country?.population}`}</div>
                <div>
                  {country.capital ? `Capital: ${country?.capital[0]}` : `Capital: no data`}
                </div>
                <div>{`Region: ${country?.region}`}</div>
              </div>
            )
          })}
        </div>
      </Main>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: grid;

  //@media (max-width: 768px) {
  //grid-template-columns: 1rem minmax(20rem, 1fr) 1rem;
  //}

  //@media (max-width: 480px) {
  //grid-template-rows: 3rem auto 1fr;
  //grid-template-columns: 1rem minmax(10rem, 1fr) 1rem;
  //}
`
