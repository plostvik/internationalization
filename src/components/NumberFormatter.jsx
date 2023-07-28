import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import style from './numberFormatter.module.css';

const NumberFormatter = () => {
  const [numberFormatter, setNumberFormatter] = useState('1');
  const { t } = useTranslation();

  const onOptionChange = e => {
    setNumberFormatter(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <div>
        <h2>{t('digits')}</h2>
        <ul>
          {formatterOptions.map(option => {
            return (
              <li key={option}>
                <label htmlFor={option}>{option}</label>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  checked={numberFormatter === option}
                  onChange={onOptionChange}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>{t('output')}</h2>
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
      </div>
    </div>
  );
};

export default NumberFormatter;

const formatterOptions = ['1', '2', '3', '4'];
