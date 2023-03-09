export type RegionT = {
  value: string
  label: string
}

export type CountryT = {
  name: { common: string; official: string }
  flags: { png: string }
  population: number
  capital: Array<string>
  region: string
  altSpellings: Array<string>
  area: number
  continents: Array<string>
  languages: { [key: string]: string }
  currencies: {
    [key: string]: { name: string; symbol: string }
  }
  language: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  timezones: Array<string>
  subregion: string
  borders: Array<string>
}
