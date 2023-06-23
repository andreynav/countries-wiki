import { onboarding } from '../../pages/ui/Onboarding'

describe('Onboarding suite', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}`)
  })

  it('Close onboarding tooltip', () => {
    cy.get(onboarding.closeBtnLocator).wait(1000).click()
    cy.get(onboarding.tooltipLocator).should('not.exist')
  })

  it('Tooltip text should be changed for specific toggles', () => {
    cy.get(onboarding.textLocator).should('have.text', onboarding.themeToggleText)
    cy.get(onboarding.nextButtonLocator).click()
    cy.get(onboarding.textLocator).should('have.text', onboarding.onboardingToggleText)
  })
})

export {}
