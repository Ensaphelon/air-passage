import { uniqueId, find } from 'lodash';
import turkishAirline from '../images/ta@2x.png';

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const months = [
  'янв',
  'фев',
  'мар',
  'апр',
  'май',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек',
];

export const applyFilters = (items, filters) => {
  if (!filters.length || find(filters, item => item.match === 'all')) {
    return items;
  }
  return items.reduce((acc, item) => {
    const match = filters
      .filter(filterItem => item[filterItem.key] === filterItem.match).length > 0;
    return match ? [...acc, item] : acc;
  }, []);
};

export const translateNumerator = (number, titles) => {
  if (number === 'all') {
    return 'Все';
  }
  const cases = [2, 0, 1, 1, 1, 2];
  const word = titles[
    (number % 100 > 4 && number % 100 < 20) ? 2
      : cases[(number % 10 < 5) ? number % 10 : 5]
  ];
  return number === 0 ? `Без ${word}` : `${number} ${word}`;
};

export const convertNumeratorString = (key, value) => {
  switch (key) {
    case 'stops':
      return translateNumerator(value, ['пересадка', 'пересадки', 'пересадок']);
    default:
      return '';
  }
};

export const renderPrice = (price, currency) => {
  const { symbol, rate } = currency;
  const newPrice = Math.round(price * rate);
  const spacedPrice = newPrice.toString().split('').reverse().map((numb, index) => ((index % 3 === 0 && index > 0) ? `${numb} ` : numb))
    .reverse()
    .join('');
  return `${spacedPrice} ${symbol}`;
};

export const getCarrierLogo = (carrier) => {
  switch (carrier) {
    case 'TK':
      return turkishAirline;
    default:
      return turkishAirline;
  }
};

export const parseDate = (dateStr) => {
  const date = new Date(dateStr);
  const dayNumber = date.getDate();
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${dayNumber} ${month} ${year}, ${day}`;
};

export const createObjectWithUniqueKeys = arr => arr.reduce((acc, current) => {
  const id = uniqueId();
  return { ...acc, [id]: { ...current, id } };
}, {});

const createMatcher = (matcherKey, matcherValue) => ({
  key: matcherKey,
  match: matcherValue,
  active: false,
  id: `${matcherKey}-${matcherValue}`,
});

const createMatchers = (critery) => {
  const { key, type, value: { from, to, step } } = critery;
  const matchers = [];
  if (critery.value.all) {
    matchers.push(createMatcher(key, 'all'));
  }
  switch (type) {
    case 'increment':
      for (let i = from; i <= to; i += step) {
        matchers.push(createMatcher(key, i));
      }
      break;
    default: return [];
  }
  return matchers;
};

export const createFilters = criteriers => criteriers
  .reduce((acc, critery) => [...acc, ...createMatchers(critery)], []);
