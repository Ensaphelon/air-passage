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

export const renderPrice = (price, currency = '₽') => {
  const spacedPrice = price.toString().split('').reverse().map((numb, index) => ((index % 3 === 0 && index > 0) ? `${numb} ` : numb))
    .reverse()
    .join('');
  return `${spacedPrice} ${currency}`;
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
