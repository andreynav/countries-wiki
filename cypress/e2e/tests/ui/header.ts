import { header } from '../../pages'

describe('Header suite', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}`)
  })

  it('header title text should contains specific value', () => {
    header.verifyHeaderTitle()
  })

  it('default onboarding toggle state should be off', () => {
    header.verifyOnboardingToggleState(false)
  })

  it('default theme toggle should be light', () => {
    header.verifyThemeToggleState(true)
    header.verifyBackgroundColor(true)
  })

  it('switch onboarding toggle and check its state should be on', () => {
    header.clickToggle(header.onboardingText)
    header.verifyOnboardingToggleState(true)
  })

  it('switch theme toggle and check background has been changed', () => {
    header.clickToggle(header.themeText)
    header.verifyThemeToggleState(false)
    header.verifyBackgroundColor(false)
  })
})

export {}
