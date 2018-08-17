import React from 'react';
import css from './styles.css';
import {
  renderPrice,
  getCarrierLogo,
  parseDate,
  convertNumeratorString,
} from '../../utils';

const Ticket = (props) => {
  const { data, currency } = props;
  return (
    <div className={css.ticket}>
      <div className={css.left_column}>
        <img
          alt={data.carrier}
          className={css.carrier_logo}
          src={getCarrierLogo(data.carrier)}
        />
        <button type="button" className={css.buy}>
          <span className={css.buy_text}>
            Купить
          </span>
          <span className={css.buy_text}>
            {`за ${renderPrice(data.price, currency)}`}
          </span>
        </button>
      </div>
      <div className={css.right_column}>
        <div className={css.time_container}>
          <div className={css.time}>
            {data.departure_time}
          </div>
          <div className={css.change_container}>
            <div className={css.change_text}>
              {convertNumeratorString('stops', data.stops)}
            </div>
          </div>
          <div className={css.time}>
            {data.arrival_time}
          </div>
        </div>
        <div className={css.details}>
          <div className={css.details_from}>
            <span className={css.details_text}>
              {`${data.origin}, ${data.origin_name}`}
            </span>
            <span className={css.details_date}>
              {parseDate(data.departure_date)}
            </span>
          </div>
          <div className={css.details_to}>
            <span className={css.details_text}>
              {`${data.destination_name}, ${data.destination}`}
            </span>
            <span className={css.details_date}>
              {parseDate(data.arrival_date)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
