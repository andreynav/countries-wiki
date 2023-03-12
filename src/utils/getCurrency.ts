import { CurrencyT } from '../types/types'

export const getCurrency = (currencies: CurrencyT) => {
  const currencyKey: string[] = Object.keys(currencies)

  if (!currencyKey.length) return

  const currencyObject: Array<string> = currencyKey.map((item) => {
    const currencyName = currencies[item]!.name
    const currencySymbol = currencies[item]!.symbol

    return `${currencyName} (${currencySymbol})`
  })

  return currencyObject?.map((currencyString) => currencyString).join(', ')
}

export {}
