import React from 'react';
import logo from '../../images/logo@2x.png';
import css from './styles.css';

const Header = () => (
  (
    <div className={css.header}>
      <img alt="Logo" className={css.logo} src={logo} />
    </div>
  )
);

export default Header;
