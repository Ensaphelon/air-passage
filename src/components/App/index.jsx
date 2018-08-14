import React from 'react';
import { hot } from 'react-hot-loader';
import Header from '../Header';
import Tickets from '../Tickets';
import styles from './styles.css';
import { tickets } from '../../tickets.json';

const App = () => {
  const { columns, right } = styles;
  return (
    <div className="component app">
      <Header />
      <div className={columns}>
        <div className={right}>
          <Tickets tickets={tickets} />
        </div>
      </div>
    </div>
  );
};

export default hot(module)(App);
