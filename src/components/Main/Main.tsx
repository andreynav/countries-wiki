import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { countryAPI } from '../../api/api'
import { useDebounce } from '../../hooks/useDebounce'
import { CountryT, RegionT } from '../../types/types'
import { getProperErrorComponent } from '../../utils/getProperErrorComponent'
import { CardList } from '../CardList/CardList'
import { Container } from '../Container/Container'
import { Controls } from '../Controls/Controls'
import { Loader } from '../Loader/Loader'

export const Main = () => {
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<RegionT>({ value: 'America', label: 'America' })
  const [countriesData, setCountriesData] = useState<Array<CountryT> | null>(null)
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)
  const debouncedSearch = useDebounce(search)

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        const data = await countryAPI.getRegion(region.value)
        setError(null)
        setCountriesData(data)
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchRegionData().then()
  }, [region.value])

  const searchCountries = useCallback(async (searchValue: string) => {
    if (searchValue.length === 0) return

    return await countryAPI.searchCountries(searchValue)
  }, [])

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const data = await searchCountries(debouncedSearch)
        setError(null)
        setCountriesData(data ?? [])
      } catch (error: any) {
        setError({ message: error.message, status: error.response?.status })
      }
    }

    fetchSearchData().then()
  }, [debouncedSearch])

  if (countriesData === null) return <Loader />

  return (
    <MainWrapper>
      <Container>
        <Controls search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
        {error ? getProperErrorComponent(error, setSearch) : <CardList countries={countriesData} />}
      </Container>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: grid;
  padding: 2rem 0;
  height: calc(100vh - 82px);

  & div {
    grid-template-rows: auto 1fr;
  }
`
