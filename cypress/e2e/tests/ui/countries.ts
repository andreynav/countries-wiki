// import regionsFx from '../../../fixtures/ui/regions.json'
import { RegionT } from '../../../support'
import { countries } from '../../pages'

describe('Counties suite', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}`)
    cy.fixture('ui/regions.json').then((data) => {
      cy.wrap(data.regions).as('regions')
    })
  })

  it.only('Check all world regions in selected by clicking each option', () => {
    cy.get<RegionT[]>('@regions').then((regions) => {
      regions.forEach((item) => {
        cy.intercept('GET', `**/region/${item.region}`).as(`getCountry${item.region}`)
        countries.openDropdown()
        countries.selectDropdownItem(item.region)
        cy.wait(`@getCountry${item.region}`).its('response.statusCode').should('eq', 200)
        countries.selectCountryByIndex(0).should('contain.text', item.firstCountryName)
      })
    })
  })

  // TODO: standup refactoring
  // regionsFx.regions.forEach((item) => {
  //   it.only(`should ${item.region} `, () => {
  //     countries.openDropdown()
  //     countries.selectDropdownItem(item.region)
  //     countries.selectCountryByIndex(0).should('contain.text', item.firstCountryName)
  //   })
  // })

  it('Check countries count of the certain region', () => {
    cy.get<RegionT[]>('@regions').then((regions) => {
      regions.forEach((item) => {
        cy.intercept('GET', `**/region/${item.region}`).as(`getCountry${item.region}`)
        countries.openDropdown()
        countries.selectDropdownItem(item.region)
        cy.wait(`@getCountry${item.region}`).its('response.statusCode').should('eq', 200)
        countries.getCountOfCountries().should('have.length', item.countCountries)
      })
    })
  })
})

export {}
