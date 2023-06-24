import { RegionsT } from '../../../support'
import { countries } from '../../pages'

describe('Counties suite', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}`)
    cy.fixture('ui/regions.json').as('regionsData')
  })

  it('Check all world regions in selector by clicking each option', () => {
    cy.get<RegionsT>('@regionsData').then((regionsData) => {
      regionsData.regions.forEach((item) => {
        let prevCountryName = ''
        countries
          .getFirstCountryName()
          .then(($el) => {
            prevCountryName = $el.text()
          })
          .then(() => {
            countries.openDropdown()
            countries.selectDropdownItem(item.region)
            countries.waitUntilCountriesLoaded(prevCountryName)
            countries.selectCountryByIndex(0).should('contain.text', item.firstCountryName)
          })
      })
    })
  })
})

export {}
