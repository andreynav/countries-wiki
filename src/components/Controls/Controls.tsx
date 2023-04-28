import styled from 'styled-components'

import { ControlsT, RegionT } from '../../types/types'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Search } from '../Search/Search'

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
]

export const Controls = ({ search, setSearch, region, setRegion }: ControlsT) => {
  const onSetRegion = (region: RegionT) => {
    setSearch('')
    setRegion(region)
  }
  return (
    <ControlsContainer>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder={'Filter by region'}
        isClearable={false}
        isSearchable={false}
        value={region}
        onChange={(value) => onSetRegion(value as RegionT)}
        className="customSelect"
      />
    </ControlsContainer>
  )
}

const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: auto;
    justify-content: stretch;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
    justify-content: stretch;
    margin-bottom: 2rem;
  }
`
