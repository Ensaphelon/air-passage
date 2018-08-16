import React from 'react';
import { hot } from 'react-hot-loader';
import { mapValues, find } from 'lodash';
import Filter from '../Filter';
import Header from '../Header';
import Tickets from '../Tickets';
import Sidebar from '../Sidebar';
import Currencies from '../Currencies';
import { createObjectWithUniqueKeys, createFilters } from '../../utils';
import styles from './styles.css';
import { tickets } from '../../tickets.json';
import criteriers from '../../criteriers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: createObjectWithUniqueKeys(props.currencies),
      filters: createFilters(criteriers),
    };
  }

  getActiveCurrency = () => {
    const { currencies } = this.state;
    return find(currencies, currency => currency.active);
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

  toggleFilter = (event, id, isOnly) => {
    event.preventDefault();
    const { filters } = this.state;
    this.setState({
      filters: filters.map((filter) => {
        let isActive = filter.id === id ? !filter.active : filter.active;
        if (isOnly) {
          isActive = filter.id === id;
        }
        return {
          ...filter,
          active: isActive,
        };
      }),
    });
  }

  render() {
    const {
      columns,
      right,
      left,
      leftInner,
    } = styles;
    const { currencies, filters } = this.state;
    const { changeCurrency, toggleFilter } = this;
    return (
      <div className="component app">
        <Header />
        <div className={columns}>
          <div className={left}>
            <div className={leftInner}>
              <Sidebar title="Валюта">
                <Currencies changeCurrency={changeCurrency} currencies={currencies} />
              </Sidebar>
              <Sidebar title="Количество пересадок">
                <Filter filters={filters} toggleFilter={toggleFilter} />
              </Sidebar>
            </div>
          </div>
          <div className={right}>
            <Tickets currency={this.getActiveCurrency()} filters={filters} tickets={tickets} />
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
