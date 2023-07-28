import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

i18n.services.formatter.add('units', (value, lng, options) => {
  const { unit } = options;
  let formattedValue = value;
  let formattedUnit = unit;
  let formattedLng = lng;

  if (lng === 'en') {
    if (unit === 'liter') {
      formattedValue = formattedValue * 33.814;
      formattedUnit = 'ounce';
    }

    if (unit === 'centimeter') {
      formattedValue = formattedValue * 0.3937;
      formattedUnit = 'inch';
    }

    if (unit === 'kilogram') {
      formattedValue = formattedValue * 2.20462;
      formattedUnit = 'pound';
    }
  }

  if (lng === 'ua') {
    formattedLng = 'ru';
  }

  return `${new Intl.NumberFormat(formattedLng, {
    unit: formattedUnit,
    style: 'unit',
  }).format(formattedValue)}`;
});

export default i18n;
