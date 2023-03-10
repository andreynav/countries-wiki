import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { countryAPI } from '../../api/api'
import { useDebounce } from '../../hooks/useDebounce'
import { CountryT, RegionT } from '../../types/types'
import { CardList } from '../CardList/CardList'
import { Container } from '../Container/Container'
import { Controls } from '../Controls/Controls'

export const Main = () => {
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<RegionT>({ value: 'America', label: 'America' })
  const [countriesData, setCountriesData] = useState<Array<CountryT>>([])
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
    searchCountries(debouncedSearch).then((data) => setCountriesData(data!))
  }, [debouncedSearch])

  if (!countriesData) return <div>Loader...</div>

  return (
    <MainWrapper>
      <Container>
        <Controls search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
        <CardList countries={countriesData} />
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
