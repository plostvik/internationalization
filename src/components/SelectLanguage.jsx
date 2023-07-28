import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ALLOWED_LANGUAGES } from '../i18n.js';

import style from './selectLanguage.module.css';

const SelectLanguage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const defaultLng = window.location.pathname.split('/')[1];
    if (ALLOWED_LANGUAGES.includes(defaultLng)) i18n.changeLanguage(defaultLng);
  }, []);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <label className={`${style.label}`}>
      {`${t('selectLabel')}:`}
      <select
        value={i18n.language}
        onChange={e => {
          changeLanguage(e.target.value);
        }}
      >
        <option value="en">{t('english')}</option>
        <option value="ua">{t('ukrainian')}</option>
        <option value="fr">{t('french')}</option>
      </select>
    </label>
  );
};

export default SelectLanguage;
