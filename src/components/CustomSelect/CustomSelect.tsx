import Select from 'react-select'
import styled from 'styled-components'

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (innerStyles: any) => ({
      ...innerStyles,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      padding: '0.5rem',
      border: 'none',
      outline: 'none',
      boxShadow: 'var(--shadow)',
      cursor: 'pointer'
    }),
    option: (innerStyles: any, state: any) => ({
      ...innerStyles,
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
      cursor: 'pointer'
    })
  }
})`
  //min-width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`
