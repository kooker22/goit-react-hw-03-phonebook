import React from 'react';
import styles from './ContactListItem.module.css';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as Icon } from '../Icons/icon.svg';

const ContactListItem = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.item} key={id}>
        {name}: {number}
        <IconButton
          className={styles.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          <Icon />
        </IconButton>
      </li>
    ))}
  </>
);

export default ContactListItem;
