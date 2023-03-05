import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { countryApi } from '../Main/Main'

export type CountryT = {
  name: { common: string }
  flags: { png: string }
  population: number
  capital: Array<string>
  region: string
  altSpellings: Array<string>
  area: number
  continents: Array<string>
  currencies: { name: string; symbol: string }
  languages: { [key: string]: string }
  language: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
}

export const Country = () => {
  const params = useParams<{ name: string }>()
  const [country, setCountry] = useState<CountryT | null>(null)

  const getCountry = (countryCode: string) => {
    void countryApi.get(`name/${countryCode}`).then((response) => {
      const data = response.data
      setCountry(data[0])
    })
  }

  useEffect(() => {
    getCountry(params.name!)
  }, [params.name])

  if (!country) return <div>Loader</div>

  const languageKey = Object.keys(country.languages).find(
    (key) => country.languages[key] === country.languages[key]
  ) as string

  const language = country.languages?.[languageKey]

  return (
    <CountryContainer>
      <FlagImage src={country?.flags?.png} alt={'flag'} />
      <CardData>
        <div>{`${country?.name.common}`}</div>
        <div>
          <b>{'Capital:'}</b> {country!.capital ? `${country?.capital[0]}` : `no data`}
        </div>
        <div>
          <b>{'Area:'}</b> {country?.area}
        </div>
        <div>
          <b>{'Population:'}</b> {country?.population}
        </div>
        <div>
          <b>{'Region:'}</b> {country?.region}
        </div>
        <div>
          <b>{'Continent:'}</b> {country?.continents[0]}
        </div>
        <div>
          <b>{'Currencies:'}</b> {country?.currencies.name} ({country?.currencies.symbol})
        </div>
        <div>
          <b>{'Languages:'}</b> {language}
        </div>
        <div>
          <b>{'Link to Google map:'}</b>{' '}
          <a
            href={country?.maps?.googleMaps ? country.maps.googleMaps : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Google map
          </a>
        </div>
        <div>
          <b>{'Link to Google street map:'}</b>{' '}
          <a
            href={country?.maps?.openStreetMaps ? country.maps.openStreetMaps : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Google street map
          </a>
        </div>
      </CardData>
    </CountryContainer>
  )
}

const CountryContainer = styled.div`
  display: grid;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  cursor: pointer;

  //justify-items: center;
  justify-self: center;
  //width: 300px;
  padding: 2rem;

  @media (max-width: 767px) {
    //width: 300px;
  }

  @media (max-width: 480px) {
    //width: 300px;
  }
`
const FlagImage = styled.img`
  display: grid;
  border-radius: var(--radii) var(--radii) 0 0;
  width: 300px;
  height: 150px;

  @media (max-width: 767px) {
    //width: 100%;
  }

  @media (max-width: 480px) {
    //width: 100%;
  }
`
const CardData = styled.div`
  display: grid;
  padding: 1rem 2rem;

  & div:first-of-type {
    font-size: var(--fs-lg);
    font-weight: var(--fw-normal);
    padding: 1rem 0;
  }

  & div {
    padding: 0.5rem 0;
  }
`
