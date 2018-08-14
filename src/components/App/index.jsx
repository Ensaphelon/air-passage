import React from 'react';
import { hot } from 'react-hot-loader';
import { mapValues, find } from 'lodash';
import Header from '../Header';
import Tickets from '../Tickets';
import Sidebar from '../Sidebar';
import Currencies from '../Currencies';
import { createObjectWithUniqueKeys } from '../../utils';
import styles from './styles.css';
import { tickets } from '../../tickets.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: createObjectWithUniqueKeys(props.currencies),
    };
  }

  changeCurrency = (event, id) => {
    event.preventDefault();
    const { currencies } = this.state;
    this.setState({
      currencies: mapValues(currencies, currency => ({
        ...currency,
        active: currency.id === id,
      })),
    });
  }

  getActiveCurrency = () => {
    const { currencies } = this.state;
    return find(currencies, currency => currency.active);
  }

  render() {
    const { columns, right, left } = styles;
    const { currencies } = this.state;
    const { changeCurrency } = this;
    return (
      <div className="component app">
        <Header />
        <div className={columns}>
          <div className={left}>
            <Sidebar title="Валюта">
              <Currencies changeCurrency={changeCurrency} currencies={currencies} />
            </Sidebar>
          </div>
          <div className={right}>
            <Tickets currency={this.getActiveCurrency()} tickets={tickets} />
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
