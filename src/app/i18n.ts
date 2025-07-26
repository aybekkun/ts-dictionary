import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetecter from 'i18next-browser-languagedetector'
import translationKR from './locales/kr.json'
import translationRU from './locales/ru.json'
i18n // Поддержка загрузки переводов (можно убрать, если локальные)
  .use(initReactI18next)
  .use(languageDetecter) // Интеграция с React
  .init({
    fallbackLng: 'ru', // Язык по умолчанию
    debug: true,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      kr: {
        translation: translationKR,
      },
      ru: {
        translation: translationRU,
      },
    },
    interpolation: {
      escapeValue: false, // React уже экранирует HTML
    },
  })

export default i18n
