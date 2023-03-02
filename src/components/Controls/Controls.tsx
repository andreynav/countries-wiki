// import { useState } from 'react'
import styled from 'styled-components'

import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Search } from '../Search/Search'

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
]

export const Controls = ({ search, setSearch, region, setRegion }: any) => {
  // const [search, setSearch] = useState('')
  // const [region, setRegion] = useState('')

  return (
    <ControlsContainer>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder={'Filter by region'}
        isClearable
        isSearchable={false}
        value={region}
        // @ts-ignore
        onChange={setRegion}
      />
    </ControlsContainer>
  )
}

const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  //padding: 2rem;

  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`
