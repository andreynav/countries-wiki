import { common, header } from '../../pages'

describe('Header suite', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}`)
  })

  it('Header title text should contains specific value', () => {
    cy.get(header.titleLocator).should('have.text', header.titleText)
  })

  it('Default onboarding toggle should be off', () => {
    cy.get(header.onboardingIconLocator).should('not.have.descendants', 'circle')
  })

  it('Default theme toggle should be light', () => {
    cy.get(header.themeTextLocator).should('have.text', 'light theme')
  })

  it('Switch onboarding toggle and check icon has been changed', () => {
    cy.get(header.onboardingTextLocator).click()
    cy.get(header.onboardingIconLocator).should('have.descendants', 'circle')
  })

  it('Switch theme toggle and check background has been changed', () => {
    cy.get(header.themeTextLocator).click()
    cy.get(header.headerLocator).should(
      'have.css',
      'background-color',
      common.darkThemeBackgroundColor
    )
  })
})

export {}
