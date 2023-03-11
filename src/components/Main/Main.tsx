import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { countryAPI } from '../../api/api'
import { useDebounce } from '../../hooks/useDebounce'
import { CountryT, RegionT } from '../../types/types'
import { CardList } from '../CardList/CardList'
import { Container } from '../Container/Container'
import { Controls } from '../Controls/Controls'
import { NotFound } from '../NotFound/NotFound'

export const Main = () => {
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<RegionT>({ value: 'America', label: 'America' })
  const [countriesData, setCountriesData] = useState<Array<CountryT>>([])
  const [error, setError] = useState(false)
  const debouncedSearch = useDebounce(search)

  const fetchRegionData = async (regionValue: string) => {
    return await countryAPI.getRegion(regionValue)
  }

  useEffect(() => {
    fetchRegionData(region.value).then((data) => setCountriesData(data))
  }, [region.value, search])

  const searchCountries = useCallback(async (searchValue: string) => {
    if (searchValue.length === 0) return

    return await countryAPI.searchCountries(searchValue)
  }, [])

  useEffect(() => {
    searchCountries(debouncedSearch)
      .then((data) => {
        setError(false)
        if (data) setCountriesData(data)
      })
      .catch((error) => {
        if (error.response.status === 404) setError(true)
      })
  }, [debouncedSearch, error])

  if (!countriesData) return <div>Loader...</div>

  return (
    <MainWrapper>
      <Container>
        <Controls search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
        {error ? <NotFound setSearch={setSearch} /> : <CardList countries={countriesData} />}
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
