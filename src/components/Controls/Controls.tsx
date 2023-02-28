import { useState } from 'react'
import styled from 'styled-components'

import { Search } from '../Search/Search'

export const Controls = () => {
  const [search, setSearch] = useState('')

  return (
    <ControlsContainer>
      <Search search={search} setSearch={setSearch} />
    </ControlsContainer>
  )
}

const ControlsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 2rem;

  @media (min-width: 767px) {
    flex-direction: row;
    //justify-content: space-between;
    align-items: center;
  }
`
