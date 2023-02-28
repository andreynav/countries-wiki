import { ChangeEvent } from 'react'
import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'

export const Search = ({ search, setSearch }: any) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  return (
    <InputContainer>
      <IoSearch />
      <Input value={search} onChange={onInputChange} />
    </InputContainer>
  )
}

const InputContainer = styled.label`
  display: grid;
  grid-template-columns: 16px auto;
  align-items: center;
  min-width: 100%;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
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
    color: var(--colors-placeholder);
  }
`
