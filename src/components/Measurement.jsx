import { useTranslation } from 'react-i18next';

const Measurement = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('measurements')}</h2>
      <ul>
        <li>{t('units', { value: 10, unit: 'centimeter' })}</li>
        <li>{t('units', { value: 200, unit: 'liter' })}</li>
        <li>{t('units', { value: 1000, unit: 'kilogram' })}</li>
      </ul>
    </>
  );
};

export default Measurement;
