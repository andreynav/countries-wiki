import { header } from './Header'

class Onboarding {
  tooltip = '.introjs-tooltip[role="dialog"]'
  text = `${this.tooltip} .introjs-tooltiptext`
  closeButton = '.introjs-tooltip .introjs-skipbutton'
  nextButton = `${this.tooltip} .introjs-nextbutton`
  backButton = `${this.tooltip} .introjs-prevbutton`

  themeToggleT = 'You can switch Dark or Light theme'
  onboardingToggleT = 'You can enable or disable  this onboarding'

  verifyTooltipIsVisible = (shouldBeVisible: boolean) => {
    const isExists = shouldBeVisible ? 'exist' : 'not.exist'
    cy.get(this.tooltip).should(isExists)
  }

  verifyOnboardingStepText = (text: string) => {
    cy.get(this.text).should('have.text', text)
  }

  clickCloseButton = () => {
    cy.get(this.closeButton).click()
  }

  clickNextButton = () => {
    cy.get(onboarding.nextButton).click()
  }

  openTooltip = (shouldBeVisible: boolean) => {
    header.clickToggle(header.onboardingText)
    this.verifyTooltipIsVisible(shouldBeVisible)
  }

  closeTooltip = (shouldBeVisible: boolean) => {
    this.clickCloseButton()
    this.verifyTooltipIsVisible(shouldBeVisible)
  }
}
export const onboarding = new Onboarding()
