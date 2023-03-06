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
    //TOOO сheck if no borders
  }

  return (
    <CountryContainer>
      <BackButton>Back</BackButton>
      <CardData className={'CardData'}>
        <FlagImage src={country?.flags?.png} alt={'flag'} />
        <DataContainer className={'DataContainer'}>
          <CountryName>{`${country?.name.common}`}</CountryName>
          <CountryData>
            <div>
              <b>{'Official Name:'}</b> {country?.name.official}
            </div>
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
              <b>{'Sub Region:'}</b> {country?.subregion}
            </div>
            <div>
              <b>{'Continent:'}</b> {country?.continents[0]}
            </div>
            <div>
              <b>{'Currencies:'}</b> {currency} ({currencySymbol})
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
            <div>
              <b>{'Timezones:'}</b> {country?.timezones[0]}
            </div>
          </CountryData>
          <CountryBoarders>
            <b>{'Boarder Countries:'}</b>
            {bordersCountries}
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

  @media (max-width: 767px) {
    //width: 300px;
  }

  @media (max-width: 480px) {
    //width: 300px;
  }
`

const CardData = styled.div`
  display: grid;
  grid-template-areas: 'FlagImage DataContainer';
  grid-template-columns: 560px 1fr;
  padding: 1rem 2rem;

  @media (max-width: 767px) {
    //width: 100%;
  }

  @media (max-width: 480px) {
    //width: 100%;
  }
`

const FlagImage = styled.img`
  display: grid;
  grid-area: FlagImage;
  height: 400px;
  border-radius: var(--radii);

  @media (max-width: 767px) {
    //width: 100%;
  }

  @media (max-width: 480px) {
    //width: 100%;
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
    //width: 100%;
  }

  @media (max-width: 480px) {
    //width: 100%;
  }
`

const CountryName = styled.div`
  display: grid;
  grid-area: CountryName;
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  padding: 1rem 1rem 2rem 1rem;
`

const CountryData = styled.div`
  display: grid;
  grid-area: CountryData;
  grid-template-rows: repeat(6, 32px);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  //height: 20px;
  align-items: center;
  //justify-items: start;
  //border: 1px solid yellow;

  & div {
    padding: 0 1rem;
  }

  & div b {
    font-weight: var(--fw-normal);
  }

  & a:link,
  a:visited {
    text-decoration: underline dotted;
    color: var(--colors-link);
  }
`

const CountryBoarders = styled.div`
  display: inline-grid;
  grid-area: CountryBoarders;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  //border: 1px solid blue;
  padding: 2rem 1rem;
`

const BackButton = styled.button`
  display: grid;
  color: var(--colors-text);
  border-style: none;
  padding: 2rem 0;
  background-color: transparent;
  //border: 1px solid var(--colors-text);
`

const StyledButton = styled.button`
  display: grid;
  width: 50px;
  color: var(--colors-text);
  background-color: transparent;
  padding: 0.5rem;
  margin: 0 0 0 1rem;
  //border-style: none;
  border: 1px solid var(--colors-text);
  border-radius: var(--radii);
`
