import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// https://github.com/i18next/i18next-browser-languageDetector
import LanguageDetector from 'i18next-browser-languagedetector';

import { fmtI18n } from '@utils/tools';

import common from './common';

const i18nData = fmtI18n(common);

export const resources = i18nData[0];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'en',
    fallbackLng: 'en',
    resources,
    ns: i18nData[1],
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie'],
      lookupQuerystring: 'ombLng',
      lookupCookie: 'ombLng',
      lookupLocalStorage: 'ombLng',
      lookupSessionStorage: 'ombLng',
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });