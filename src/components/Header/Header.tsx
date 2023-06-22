import { useEffect, useState } from 'react'
import { IoEye, IoEyeOff, IoMoon, IoMoonOutline } from 'react-icons/io5'
import styled from 'styled-components'

import { Container } from '../Container/Container'
import { Onboarding } from '../Onboarding/Onboarding'

export const Header = () => {
  const [theme, setTheme] = useState('light')
  const [onboarding, setOnboarding] = useState<boolean>(true)

  const onSwitchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const onSwitchOnboarding = () => {
    setOnboarding(!onboarding)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title data-cy="header-title">Where in the world?</Title>
          {onboarding && <Onboarding />}
          <Controls>
            <ModeSwitcher className="onboarding" onClick={onSwitchOnboarding}>
              {onboarding ? <IoEye size={'18px'} /> : <IoEyeOff size={'18px'} />}
              <div style={{ marginLeft: '0.75rem' }}>{onboarding} onboarding</div>
            </ModeSwitcher>
            <ModeSwitcher className="toggle" onClick={onSwitchTheme}>
              {theme === 'light' ? <IoMoonOutline size={'16px'} /> : <IoMoon size={'16px'} />}
              <div style={{ marginLeft: '0.75rem' }}>{theme} theme</div>
            </ModeSwitcher>
          </Controls>
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

const Title = styled.div`
  display: grid;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const Controls = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto auto;
  justify-content: space-between;
`

const ModeSwitcher = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  align-items: center;
`
