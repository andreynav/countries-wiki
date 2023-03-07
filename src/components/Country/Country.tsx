import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { countryApi } from '../Main/Main'

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

  if (!country) return <div>Loader...</div>

  const languageKey: string | undefined = Object.keys(country.languages)[0]
  const language = country.languages[languageKey!]

  const currencyKey: string | undefined = Object.keys(country.currencies)[0]
  const currency = country.currencies[currencyKey!]?.name
  const currencySymbol = country.currencies[currencyKey!]?.symbol

  let bordersCountries = null
  if (country?.borders?.length > 0) {
    bordersCountries = country.borders.map((item) => {
      return <StyledButton key={item}>{item}</StyledButton>
    })
  }

  // TODO border countries request

  return (
    <CountryContainer>
      <BackButton>Back</BackButton>
      <CardData className="CardData">
        <FlagImage src={country?.flags?.png} alt={'flag'} />
        <DataContainer className="DataContainer">
          <CountryName>{`${country?.name.common}`}</CountryName>
          <CountryData>
            <div>
              <b>Official Name:&nbsp;</b>
              {country?.name.official}
            </div>
            <div>
              <b>Capital:&nbsp;</b>
              {country!.capital ? `${country?.capital[0]}` : `no data`}
            </div>
            <div>
              <b>Area:&nbsp;</b>
              {country?.area}
            </div>
            <div>
              <b>Population:&nbsp;</b>
              {country?.population}
            </div>
            <div>
              <b>Region:&nbsp;</b>
              {country?.region}
            </div>
            <div>
              <b>Sub Region:&nbsp;</b>
              {country?.subregion}
            </div>
            <div>
              <b>Continent:&nbsp;</b>
              {country?.continents[0]}
            </div>
            <div>
              <b>Currencies:&nbsp;</b>
              {currency} ({currencySymbol})
            </div>
            <div>
              <b>Languages:&nbsp;</b>
              {language}
            </div>
            <div>
              <b>Link to Google map:&nbsp;</b>
              <a
                href={country?.maps?.googleMaps ? country.maps.googleMaps : '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
            <div>
              <b>Link to Google street map:&nbsp;</b>{' '}
              <a
                href={country?.maps?.openStreetMaps ? country.maps.openStreetMaps : '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
            <div>
              <b>{'Timezones:'}</b> {country?.timezones[0]}
            </div>
          </CountryData>
          <CountryBoarders>
            <b>Boarder Countries:&nbsp;</b>
            <div>{bordersCountries !== null ? bordersCountries : 'no countries'}</div>
          </CountryBoarders>
        </DataContainer>
      </CardData>
    </CountryContainer>
  )
}

const CountryContainer = styled.div`
  display: grid;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  cursor: pointer;
  justify-self: center;
`

const CardData = styled.div`
  display: grid;
  grid-template-areas: 'FlagImage DataContainer';
  grid-template-columns: 560px 1fr;
  padding: 1rem 2rem;
  min-width: 1280px;

  @media (max-width: 767px) {
    min-width: 660px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'FlagImage'
      'DataContainer';
  }

  @media (max-width: 480px) {
    min-width: 420px;
  }
`

const FlagImage = styled.img`
  display: grid;
  grid-area: FlagImage;
  height: 400px;
  border-radius: var(--radii);

  @media (max-width: 767px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

const DataContainer = styled.div`
  display: grid;
  grid-area: DataContainer;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'CountryName'
    'CountryData'
    'CountryBoarders';
  padding: 1rem;

  @media (max-width: 767px) {
  }

  @media (max-width: 480px) {
  }
`

const CountryName = styled.div`
  display: grid;
  grid-area: CountryName;
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  padding: 1.5rem 1rem 2rem 1rem;

  @media (max-width: 767px) {
  }

  @media (max-width: 480px) {
  }
`

const CountryData = styled.div`
  display: grid;
  grid-area: CountryData;
  grid-template-rows: repeat(6, 32px);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;

  & div {
    padding: 0.5rem 1rem;
  }

  & div b {
    font-weight: var(--fw-normal);
  }

  & a:link,
  a:visited {
    text-decoration: underline dotted;
    color: var(--colors-link);
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 480px) {
    grid-template-rows: repeat(12, auto);
    grid-template-columns: 1fr;
  }
`

const CountryBoarders = styled.div`
  display: inline-grid;
  grid-area: CountryBoarders;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  padding: 2rem 1rem;

  & b {
    font-weight: var(--fw-bold);
  }

  @media (max-width: 767px) {
    & b {
      margin: 0;
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(1, auto);
    grid-template-columns: 1fr;

    & b {
      margin: 0 0 1rem 0;
    }
  }
`

const BackButton = styled.button`
  color: var(--colors-text);
  border-style: none;
  padding: 2rem 0;
  background-color: transparent;
`

const StyledButton = styled.button`
  width: 50px;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
  padding: 0.5rem;
  margin: 0 0 0 1rem;
  border-style: none;
  box-shadow: var(--shadow);
  cursor: pointer;

  @media (max-width: 767px) {
  }

  @media (max-width: 480px) {
    margin: 0 1rem 0 0;
  }
`
