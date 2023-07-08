import { common } from '../index'

class Header {
  header = '#root header'
  headerTitle = '[data-cy="header-title"]'
  titleText = 'Where in the world?'
  themeText = '[data-cy="header-theme"]'
  onboardingIcon = '.onboarding svg'
  onboardingText = '[data-cy="header-onboarding"]'

  verifyHeaderTitle = () => {
    cy.get(this.headerTitle).should('have.text', this.titleText)
  }

  verifyOnboardingToggleState = (isOn: boolean) => {
    const condition = isOn ? 'have.descendants' : 'not.have.descendants'
    cy.get(this.onboardingIcon).should(condition, 'circle')
  }

  verifyThemeToggleState = (isLightTheme: boolean) => {
    const theme = isLightTheme ? 'light theme' : 'dark theme'
    cy.get(this.themeText).should('have.text', theme)
  }

  verifyBackgroundColor = (isLightTheme: boolean) => {
    const backgroundColor = isLightTheme
      ? common.lightThemeBackgroundColor
      : common.darkThemeBackgroundColor
    cy.get(this.header).should('have.css', 'background-color', backgroundColor)
  }

  clickToggle = (toggleLocator: string) => {
    cy.get(toggleLocator).click()
  }
}

export const header = new Header()
