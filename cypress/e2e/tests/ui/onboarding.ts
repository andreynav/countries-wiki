import { onboarding } from '../../pages/'

describe('Onboarding suite', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}`)
  })

  it('Close onboarding tooltip by clicking cross icon', () => {
    onboarding.openTooltip()
    onboarding.closeTooltip()
  })

  it('Tooltip text should be changed for specific toggles', () => {
    onboarding.openTooltip()
    cy.get(onboarding.textLocator).should('have.text', onboarding.themeToggleText)
    cy.get(onboarding.nextButtonLocator).click()
    cy.get(onboarding.textLocator).should('have.text', onboarding.onboardingToggleText)
  })
})

export {}
