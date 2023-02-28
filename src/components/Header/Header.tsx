import { useEffect, useState } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import styled from 'styled-components'

import { Container } from '../Container/Container'

export const Header = () => {
  const [theme, setTheme] = useState('light')

  const onSwitchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={onSwitchTheme}>
            {theme === 'light' ? <IoMoonOutline size={'14px'} /> : <IoMoon size={'14px'} />}
            <div style={{ marginLeft: '0.75rem' }}>{theme} theme</div>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  )
}

const HeaderElement = styled.header`
  display: grid;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled.div.attrs({
  to: '/'
})`
  display: grid;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`
