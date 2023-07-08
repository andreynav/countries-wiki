class Countries {
  countriesList = '[data-cy="countries-list"]'
  searchInput = '[data-cy="search-input"]'
  searchClose = '[data-cy="search-close"]'
  selectedValue = '[class*="ValueContainer"] div'
  selectDropdown = '[class*="IndicatorsContainer"]'
  dropdownList = '.search + div > div:nth-child(4)'
  dropdownItem = 'div[class$="option"]'
  countryName = '[data-cy="country-name"]'

  clickDropdown = () => {
    cy.get(this.selectDropdown).click()
  }

  clickDropdownItem = (value: string) => {
    cy.get(this.dropdownList).contains(this.dropdownItem, value).click()
  }

  verifyDropdownIsOpened = () => {
    cy.get(this.dropdownList).should('be.visible')
  }

  verifyDropdownValue = (value: string) => {
    cy.get(this.selectedValue).should('contain.text', value)
  }

  verifyFirstCountryName = (countryName: string) => {
    this.selectCountryByIndex(0).should('contain.text', countryName)
  }

  verifyCountOfCountries = (countryCount: number) => {
    cy.get(`${this.countriesList} a`).should('have.length', countryCount)
  }

  openDropdown = () => {
    this.clickDropdown()
    this.verifyDropdownIsOpened()
  }

  selectDropdownItem = (value: string) => {
    this.clickDropdownItem(value)
    this.verifyDropdownValue(value)
  }
  // TODO: old implementation version
  getFirstCountryName = () => {
    return cy.get(countries.countryName).first()
  }
  // TODO: old implementation version
  waitUntilCountriesLoaded = (oldValue: string) => {
    cy.get(countries.countryName).should('not.have.value', oldValue)
  }

  selectCountryByIndex = (index: number) => {
    return cy.get(this.countriesList, { timeout: 10000 }).find('a').eq(index).should('be.visible')
  }
}

export const countries = new Countries()
