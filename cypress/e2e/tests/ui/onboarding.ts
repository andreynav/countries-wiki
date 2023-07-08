import { onboarding } from '../../pages/'

describe('Onboarding suite', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}`)
  })

  it('Close onboarding tooltip by clicking cross icon', () => {
    onboarding.openTooltip(true)
    onboarding.closeTooltip(false)
  })

  it('Tooltip text should be changed for specific toggles', () => {
    onboarding.openTooltip(true)
    onboarding.verifyOnboardingStepText(onboarding.themeToggleT)
    onboarding.clickNextButton()
    onboarding.verifyOnboardingStepText(onboarding.onboardingToggleT)
  })
})

export {}
