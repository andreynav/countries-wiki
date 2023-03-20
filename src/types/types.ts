export type RegionT = {
  value: string
  label: string
}

export type SetRegionT = (region: RegionT) => void

export type SetSearchT = (search: string) => void
export type SearchT = {
  search: string
  setSearch: SetSearchT
}

export type ControlsT = {
  region: RegionT
  setRegion: SetRegionT
} & SearchT

export type LanguagesT = { [key: string]: string }
export type CurrencyT = {
  [key: string]: { name: string; symbol: string }
}

export type CountryT = {
  name: { common: string; official: string }
  flags: {
    png: string
    alt: string
  }
  population: number
  capital: Array<string>
  region: string
  altSpellings: Array<string>
  area: number
  continents: Array<string>
  languages: LanguagesT
  currencies: CurrencyT
  language: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  timezones: Array<string>
  subregion: string
  borders: Array<string>
}
