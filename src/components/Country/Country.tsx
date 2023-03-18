import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { countryAPI } from '../../api/api'
import { CountryT } from '../../types/types'
import { getCurrency } from '../../utils/getCurrency'
import { getLanguages } from '../../utils/getLanguages'
import { splitNumber } from '../../utils/splitNumber'
import { BackButton } from '../BackButton/BackButton'
import { Loader } from '../Loader/Loader'

export const Country = () => {
  const params = useParams<{ name: string }>()
  const [country, setCountry] = useState<CountryT | null>(null)
  const [borderCountryNameList, setBorderCountryNameList] = useState<string[]>([])

  const getCountry = async (countryCode: string) => {
    const countryData = await countryAPI.searchCountries(countryCode)
    return countryData[0] || null
  }

  useEffect(() => {
    getCountry(params.name!).then((data) => setCountry(data))
  }, [params.name])

  const getBorderCountryNameByCode = async (borderCountryCode: string) => {
    return await countryAPI.getBorderCountryNameByCode(borderCountryCode)
  }

  useEffect(() => {
    if (!country?.borders?.length) {
      return
    }
    Promise.all(
      country.borders.map(async (borderCountryCode) => {
        const borderCountry = await getBorderCountryNameByCode(borderCountryCode)
        // @ts-ignore
        return borderCountry[0]?.name.common
      })
    )
      .then((borderCountryNames) => {
        setBorderCountryNameList(borderCountryNames)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [country])

  if (!country) return <Loader />

  let bordersCountries = null
  if (borderCountryNameList?.length > 0) {
    bordersCountries = borderCountryNameList?.map((borderCountryName) => {
      return (
        <StyledNavLink key={borderCountryName} to={`/country/${borderCountryName}`}>
          <BoarderCountryButton>{borderCountryName}</BoarderCountryButton>
        </StyledNavLink>
      )
    })
  }

  return (
    <CountryContainer>
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
      <CardData className="CardData">
        <FlagImage src={country?.flags?.png} alt={country?.flags?.alt} />
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
              {splitNumber(country?.area)} {'km'}
              {<sup>2</sup>}
            </div>
            <div>
              <b>Population:&nbsp;</b>
              {splitNumber(country?.population)}
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
              {/*{currency} ({currencySymbol})*/}
              {getCurrency(country.currencies)}
            </div>
            <div>
              <b>Languages:&nbsp;</b>
              {getLanguages(country.languages)}
            </div>
            <div>
              <b>Link to Google map:&nbsp;</b>
              <a
                href={country?.maps?.googleMaps ? country.maps.googleMaps : '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
            </div>
            <div>
              <b>Link to Google street map:&nbsp;</b>{' '}
              <a
                href={country?.maps?.openStreetMaps ? country.maps.openStreetMaps : '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
            </div>
            <div>
              <b>{'Timezones:'}</b> {country?.timezones.map((timezone) => timezone).join(', ')}
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

const ButtonContainer = styled.div`
  margin: 2rem 2rem 1rem 2rem;
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
  grid-template-rows: repeat(6, minmax(32px, auto));
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  & div {
    padding: 0.25rem 1rem;
  }

  & div b {
    font-weight: var(--fw-normal);
  }

  & div sup {
    font-size: var(--fs-esm);
  }

  & a:link,
  a:visited {
    text-decoration: none;
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
  line-height: 36px;
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
      //margin: 0 0 1rem 0;
    }
  }
`

const BoarderCountryButton = styled.button`
  width: auto;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
  padding: 0.5rem;
  margin: 0 0 1rem 1rem;
  border-style: none;
  box-shadow: var(--shadow);
  cursor: pointer;

  @media (max-width: 767px) {
  }

  @media (max-width: 480px) {
    margin: 0 1rem 1rem 0;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  justify-self: center;
`
