import { useTranslation } from 'react-i18next';

import style from './selectLanguage.module.css';

const SelectLanguage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <label className={`${style.label}`}>
      {`${t('selectLabel')}:`}
      <select
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
