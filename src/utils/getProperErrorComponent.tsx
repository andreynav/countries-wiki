import { Error } from '../components/Error/Error'
import { NotFound } from '../components/NotFound/NotFound'

export const getProperErrorComponent = (error: any) => {
  if (error.message === 'Network Error') {
    return <Error>{error.message}</Error>
  } else if (error.message === 'Request failed with status code 404') {
    return <NotFound />
  } else {
    console.log(error)
  }
}
