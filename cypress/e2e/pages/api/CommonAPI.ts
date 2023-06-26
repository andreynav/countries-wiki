import Ajv from 'ajv'
import addFormats from 'ajv-formats'

class CommonAPI {
  validateSchema = (schema: any, response: any) => {
    const ajv = new Ajv()
    addFormats(ajv)
    const validate = ajv.compile(schema)
    const valid = validate(response)

    const getSchemaError = (getAjvError: any) => {
      return cy.wrap(
        `Field: ${getAjvError[0]['dataPath']} is invalid. Cause: ${getAjvError[0]['message']}`
      )
    }

    if (!valid) {
      getSchemaError(validate.errors).then(() => {
        const errors = validate.errors
        errors?.forEach((error) => {
          const { instancePath, message } = error
          console.log(`Field '${instancePath}' is invalid. Cause: ${message}`)
          cy.log(`Field '${instancePath}' is invalid. Cause: ${message}`)
          throw new Error(`Field '${instancePath}' is invalid. Cause: ${message}`)
        })
      })
    } else {
      expect(valid).to.be.true
      cy.log('Schema validated!')
    }
  }
}

export const commonAPI = new CommonAPI()
