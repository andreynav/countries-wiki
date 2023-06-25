class Countries {
  countriesListLocator = '[data-cy="countries-list"]'
  searchInputLocator = '[data-cy="search-input"]'
  searchCloseLocator = '[data-cy="search-close"]'
  selectValueLocator = '[class*="ValueContainer"]'
  selectDropdownLocator = '[class*="IndicatorsContainer"]'
  dropdownListLocator = '#react-select-3-listbox'
  countryNameLocator = '[data-cy="country-name"]'

  openDropdown() {
    cy.get(this.selectDropdownLocator).click()
    cy.get(this.dropdownListLocator).should('be.visible')
  }

  selectDropdownItem(value: string) {
    cy.get(this.dropdownListLocator).find('div').contains(value).wait(1000).click()
    cy.get(this.selectValueLocator).should('contain.text', value)
  }

  getFirstCountryName() {
    return cy.get(countries.countryNameLocator).first()
  }

  waitUntilCountriesLoaded(oldValue: string) {
    cy.get(countries.countryNameLocator).should('not.have.value', oldValue)
  }

  selectCountryByIndex(index: number) {
    return cy
      .get(this.countriesListLocator, { timeout: 10000 })
      .find('a')
      .eq(index)
      .should('be.visible')
  }

  getCountOfCountries() {
    return cy.get(`${this.countriesListLocator} > a`)
  }
}

export const countries = new Countries()
