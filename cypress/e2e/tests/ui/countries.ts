import regions from '../../../fixtures/ui/regions.json'
import { countries } from '../../pages'

describe('Counties suite', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}`)
  })

  regions.forEach((item) => {
    it(`check that ${item.region} contains ${item.firstCountryName} country`, () => {
      // cy.intercept('GET', `**/region/${item.region}`).as(`getCountry${item.region}`)
      countries.openDropdown()
      countries.selectDropdownItem(item.region)
      // cy.wait(`@getCountry${item.region}`).its('response.statusCode').should('eq', 200)
      countries.verifyFirstCountryName(item.firstCountryName)
    })
  })

  regions.forEach((item) => {
    it(`check that ${item.region} has ${item.countCountries} countries`, () => {
      // cy.intercept('GET', `**/region/${item.region}`).as(`getCountry${item.region}`)
      countries.openDropdown()
      countries.selectDropdownItem(item.region)
      // cy.wait(`@getCountry${item.region}`).its('response.statusCode').should('eq', 200)
      countries.verifyCountOfCountries(item.countCountries)
    })
  })
})

export {}
