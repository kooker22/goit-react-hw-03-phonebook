import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, contacts, onChange }) =>
  contacts.length > 2 && (
    <label>
      Contact Filter
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );

export default Filter;
