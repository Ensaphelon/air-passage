import React from 'react';
import PropTypes from 'prop-types';
import Ticket from '../Ticket';
import styles from './styles.css';

const Tickets = (props) => {
  const { tickets, currency } = props;
  return (
    <div className="tickets">
      <ul className={styles.tickets__list}>
        {tickets.map((ticket, index) => (
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
