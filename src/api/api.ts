import axios from 'axios'

import { CountryT } from '../types/types'

export const country = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  withCredentials: false
})

export const countryAPI = {
  getRegion: (regionValue: string) => {
    return country.get<CountryT[]>(`region/${regionValue}`).then((response) => response.data)
  },
  searchCountries: (searchValue: string) => {
    return country.get<CountryT[]>(`/name/${searchValue}`).then((response) => response.data)
  },
  getCountry: (countryCode: string) => {
    return country.get<CountryT[]>(`name/${countryCode}`).then((response) => response.data)
  }
}
