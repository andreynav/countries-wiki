import 'cypress-plugin-api'

import { commonAPI } from '../../pages'

describe('Counties suite', () => {
  beforeEach(() => {
    cy.fixture('ui/regions.json').then((data) => {
      cy.wrap(data.regions).as('regions')
    })
  })

  // cy.get<RegionsT>('@regionsData').then((regionsData) => {
  //       regions.forEach((item) => {
  //         cy.api(`https://restcountries.com/v3.1/region/${item.region}`).then((response) => {
  //           expect(response.status).eq(200)
  //         })
  //       })
  //     })
  // if using loop - browser crashes - https://github.com/cypress-io/cypress/issues/21135
  it('GET request to region Africa should have status 200', () => {
    cy.api(`https://restcountries.com/v3.1/region/Africa`).then((response) => {
      expect(response.status).eq(200)
    })
  })

  it('GET request to region Africa should have certain length', () => {
    cy.api(`https://restcountries.com/v3.1/region/Africa`).then((response) => {
      expect(response.body).have.length(59)
    })
  })

  it('GET request to region Africa should have correct JSON schema', () => {
    cy.fixture('api/json-schema-region.json').then((countrySchema) => {
      cy.api(`https://restcountries.com/v3.1/region/Africa`).then((response) => {
        commonAPI.validateSchema(countrySchema, response)
      })
    })
  })

  it('GET request to region Asia should have status code 200', () => {
    cy.api(`https://restcountries.com/v3.1/region/Asia`).then((response) => {
      expect(response.status).eq(200)
    })
  })

  it('GET request to region Asia should have status code 200', () => {
    cy.api(`https://restcountries.com/v3.1/region/Asia`).then((response) => {
      expect(response.body).have.length(50)
    })
  })

  it('GET request to region Asia should have correct JSON schema', () => {
    cy.fixture('api/json-schema-region.json').then((countrySchema) => {
      cy.api(`https://restcountries.com/v3.1/region/Asia`).then((response) => {
        commonAPI.validateSchema(countrySchema, response)
      })
    })
  })

  it('GET request to region Europe should have status code 200', () => {
    cy.api(`https://restcountries.com/v3.1/region/Asia`).then((response) => {
      expect(response.status).eq(200)
    })
  })

  it('GET request to region Europe should have status code 200', () => {
    cy.api(`https://restcountries.com/v3.1/region/Europe`).then((response) => {
      expect(response.body).have.length(53)
    })
  })

  it('GET request to region Europe should have correct JSON schema', () => {
    cy.fixture('api/json-schema-region.json').then((countrySchema) => {
      cy.api(`https://restcountries.com/v3.1/region/Europe`).then((response) => {
        commonAPI.validateSchema(countrySchema, response)
      })
    })
  })

  it('GET request to region America should have status code 200', () => {
    cy.api(`https://restcountries.com/v3.1/region/America`).then((response) => {
      expect(response.status).eq(200)
    })
  })

  it('GET request to region America should have status code 200', () => {
    cy.api(`https://restcountries.com/v3.1/region/America`).then((response) => {
      expect(response.body).have.length(56)
    })
  })

  it('GET request to region America should have correct JSON schema', () => {
    cy.fixture('api/json-schema-region.json').then((countrySchema) => {
      cy.api(`https://restcountries.com/v3.1/region/America`).then((response) => {
        commonAPI.validateSchema(countrySchema, response)
      })
    })
  })

  it('GET request to region Oceania should have status code 200', () => {
    cy.api(`https://restcountries.com/v3.1/region/Oceania`).then((response) => {
      expect(response.status).eq(200)
    })
  })

  it('GET request to region Oceania should have status code 200', () => {
    cy.api(`https://restcountries.com/v3.1/region/Oceania`).then((response) => {
      expect(response.body).have.length(27)
    })
  })

  it('GET request to region Oceania should have correct JSON schema', () => {
    cy.fixture('api/json-schema-region.json').then((countrySchema) => {
      cy.api(`https://restcountries.com/v3.1/region/Oceania`).then((response) => {
        commonAPI.validateSchema(countrySchema, response)
      })
    })
  })
})

export {}
