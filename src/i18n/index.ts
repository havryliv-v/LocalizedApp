import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'

import translationEn from './locales/en-US/translation.json'
import translationHe from './locales/he-IL/translation.json'

const resources = {
  'en-US': {translation: translationEn},
  'he-IL': {translation: translationHe},
}

i18next.use(initReactI18next).init({
  lng: 'en-US',
  fallbackLng: 'en-US',
  compatibilityJSON: 'v3',
  resources,
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
