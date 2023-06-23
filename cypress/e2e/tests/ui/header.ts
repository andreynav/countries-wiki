import { common } from '../../pages/ui/Common'
import { header } from '../../pages/ui/Header'
import { onboarding } from '../../pages/ui/Onboarding'

describe('Header suite', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Header title text should contains specific value', () => {
    cy.get(header.titleLocator).should('have.text', header.titleText)
  })

  it.only('Default onboarding toggle should be on', () => {
    cy.get(onboarding.closeBtnLocator).wait(1000).click()
    cy.get(onboarding.tooltipLocator).should('not.exist')
    cy.get(header.onboardingIconLocator).should('have.descendants', 'circle')
  })

  it.only('Default theme toggle should be light', () => {
    cy.get(onboarding.closeBtnLocator).wait(1000).click()
    cy.get(onboarding.tooltipLocator).should('not.exist')
    cy.get(header.themeTextLocator).should('have.text', 'light theme')
  })

  it('Turn off onboarding toggle and check icon has been changed', () => {
    cy.get(onboarding.closeBtnLocator).wait(1000).click()
    cy.get(onboarding.tooltipLocator).should('not.exist')
    cy.get(header.onboardingTextLocator).click()
    cy.get(header.onboardingIconLocator).should('not.have.descendants', 'circle')
  })

  it('Switch theme toggle and check icon has been changed', () => {
    cy.get(onboarding.closeBtnLocator).wait(1000).click()
    cy.get(onboarding.tooltipLocator).should('not.exist')
    cy.get(header.themeTextLocator).click()
    cy.get(header.headerLocator).should(
      'have.css',
      'background-color',
      common.darkThemeBackgroundColor
    )
  })
})

export {}
