import React from 'react';
import css from './styles.css';

const Sidebar = (props) => {
  const { title, children } = props;
  return (
    <div className={css.sidebar}>
      <div className={css.title}>
        {title}
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
