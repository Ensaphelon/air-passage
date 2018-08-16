import React from 'react';
import PropTypes from 'prop-types';
import Ticket from '../Ticket';
import { applyFilters } from '../../utils';
import styles from './styles.css';

const Tickets = (props) => {
  const { tickets, currency, filters } = props;
  const activeFilter = filters.filter(item => item.active);
  return (
    <div className="tickets">
      <ul className={styles.tickets__list}>
        {applyFilters(tickets, activeFilter)
          .sort((a, b) => a.price - b.price)
          .map((ticket, index) => (
            <li key={index} className="tickets__item">
              <Ticket currency={currency} data={ticket} />
            </li>
          ))}
      </ul>
    </div>
  );
};

Tickets.propTypes = {
  tickets: PropTypes.instanceOf(Array).isRequired,
};

export default Tickets;
