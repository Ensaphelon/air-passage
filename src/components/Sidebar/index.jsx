import React from 'react';
// import PropTypes from 'prop-types';
import css from './styles.css';

const Sidebar = (props) => {
  const { title, children } = props;
  return (
    <div className="sidebar">
      <div className={css.title}>{title}</div>
      {children}
    </div>
  );
};

// Tickets.propTypes = {
//   tickets: PropTypes.instanceOf(Array).isRequired,
// };

export default Sidebar;
