import { ChangeEvent } from 'react'
import { IoCloseCircleOutline, IoSearch } from 'react-icons/io5'
import styled from 'styled-components'

import { SearchT } from '../../types/types'

export const Search = ({ search, setSearch }: SearchT) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  return (
    <InputContainer className="search">
      <IoSearch size={20} />
      <Input value={search} onChange={onInputChange} data-cy="search-input" />
      <IoCloseCircleOutline size={20} onClick={() => setSearch('')} data-cy="search-close" />
    </InputContainer>
  )
}

const InputContainer = styled.label`
  display: grid;
  grid-template-columns: 20px auto 20px;
  align-items: center;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  margin-bottom: 0;
  padding: 1rem;
  cursor: pointer;

  @media (max-width: 767px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Search for a country...'
})`
  display: grid;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
  margin-left: 2rem;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--colors-text);
  }
`
