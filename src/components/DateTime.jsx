import { useTranslation } from 'react-i18next';

const DateTime = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ua' ? 'uk-UA' : i18n.language;

  return (
    <>
      <h2>{t('date.header')}</h2>
      <ul>
        <li>{t('date.standard', { value: Date.now() })}</li>
        <li>{t('date.full', { value: Date.now(), lng: locale })}</li>
        <li>{t('date.short', { value: Date.now(), lng: locale })}</li>
        <li>{t('date.time', { value: Date.now() })}</li>
      </ul>
    </>
  );
};

export default DateTime;
