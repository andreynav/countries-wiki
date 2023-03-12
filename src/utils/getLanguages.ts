import { LanguagesT } from '../types/types'

export const getLanguages = (languages: LanguagesT) => {
  const languageKey: string[] = Object.keys(languages)

  if (!languageKey.length) return

  const languagesValues: Array<string | undefined> = languageKey.map((item) => {
    return languages[item]
  })
  return languagesValues?.map((language) => language).join(', ')
}

export {}
