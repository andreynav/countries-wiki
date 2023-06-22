import { header } from '../../pages/ui/Header'

describe('Header suite', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Header title text should contains specific value', () => {
    cy.get(header.titleLocator).should('have.text', header.titleText)
  })
})

export {}
