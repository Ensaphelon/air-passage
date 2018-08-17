import React from 'react';
import cn from 'classnames';
import { convertNumeratorString } from '../../utils';
import css from './styles.css';

const Filter = (props) => {
  const { filters, toggleFilter } = props;
  return (
    <ul className={css.filter}>
      {filters.map((item) => {
        const {
          id,
          active,
          match,
          key,
        } = item;
        const iconClass = cn({
          [css.icon]: true,
          [css.checked]: active,
        });
        return (
          <li className={css.item} key={id}>
            <label
              className={css.label}
              onClick={e => toggleFilter(e, id)}
              htmlFor={id}
            >
              <input
                className={css.input}
                id={id}
                type="checkbox"
                checked={active}
              />
              <i className={iconClass} />
              <span className={css.text}>
                {convertNumeratorString(key, match)}
              </span>
            </label>
            <button
              className={css.button}
              onClick={e => toggleFilter(e, id, true)}
              type="button"
            >
              Только
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
