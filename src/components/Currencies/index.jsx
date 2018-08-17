import React from 'react';
import cn from 'classnames';
import currencySelector from '../../selectors';
import css from './styles.css';

const Currencies = (props) => {
  const currencies = currencySelector(props);
  const { changeCurrency } = props;
  return (
    <div className="currencies">
      <ul className={css.list}>
        {currencies.map((currency) => {
          const className = cn({
            [css.button]: true,
            [css.active]: currency.active,
          });
          return (
            <li className={css.item} key={currency.id}>
              <button
                onClick={e => changeCurrency(e, currency.id)}
                className={className}
                type="button"
              >
                {currency.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Currencies;
