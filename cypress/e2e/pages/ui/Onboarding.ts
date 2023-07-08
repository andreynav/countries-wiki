import { header } from './Header'

class Onboarding {
  tooltipLocator = '.introjs-tooltip[role="dialog"]'
  textLocator = `${this.tooltipLocator} .introjs-tooltiptext`
  closeBtnLocator = '.introjs-tooltip .introjs-skipbutton'
  nextButtonLocator = `${this.tooltipLocator} .introjs-nextbutton`
  backButtonLocator = `${this.tooltipLocator} .introjs-prevbutton`

  themeToggleT = 'You can switch Dark or Light theme'
  onboardingToggleT = 'You can enable or disable  this onboarding'

  verifyTooltipIsVisible = (shouldBeVisible: boolean) => {
    const isExists = shouldBeVisible ? 'exist' : 'not.exist'
    cy.get(this.tooltipLocator).should(isExists)
  }

  verifyOnboardingStepText = (text: string) => {
    cy.get(this.textLocator).should('have.text', text)
  }

  clickCloseButton = () => {
    cy.get(this.closeBtnLocator).click()
  }

  clickNextButton = () => {
    cy.get(onboarding.nextButtonLocator).click()
  }

  openTooltip = (shouldBeVisible: boolean) => {
    header.clickToggle(header.onboardingTextLocator)
    this.verifyTooltipIsVisible(shouldBeVisible)
  }

  closeTooltip = (shouldBeVisible: boolean) => {
    this.clickCloseButton()
    this.verifyTooltipIsVisible(shouldBeVisible)
  }
}
export const onboarding = new Onboarding()
