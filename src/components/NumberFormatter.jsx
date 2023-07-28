import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NumberFormatter = () => {
  const [numberFormatter, setNumberFormatter] = useState('1');
  const { t } = useTranslation();

  const onOptionChange = e => {
    setNumberFormatter(e.target.value);
  };

  return (
    <>
      <h2>{t('digits')}</h2>
      <div>
        {formatterOptions.map(option => {
          return (
            <div key={option}>
              <label htmlFor={option}>{option}</label>
              <input
                type="radio"
                value={option}
                id={option}
                checked={numberFormatter === option}
                onChange={onOptionChange}
              />
            </div>
          );
        })}
      </div>
      <h4>{t('output')}</h4>
      <ul>
        <li>
          {t('number', {
            value: 123_456_789.22,
            minimumFractionDigits: numberFormatter,
          })}
        </li>
        <li>
          {t('number', {
            value: 150_000_00,
            minimumFractionDigits: numberFormatter,
          })}
        </li>
        <li>
          {t('number', {
            value: 1_408.23,
            minimumFractionDigits: numberFormatter,
          })}
        </li>
        <li>
          {t('number', {
            value: 99.2345,
            minimumFractionDigits: numberFormatter,
          })}
        </li>
      </ul>
    </>
  );
};

export default NumberFormatter;

const formatterOptions = ['1', '2', '3', '4'];
