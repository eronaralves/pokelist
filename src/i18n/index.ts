import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from '@i18n/pt.json'
import en from '@i18n/en.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'pt',
  resources: {
    pt,
    en
  },
  react: {
    useSuspense: false
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n;