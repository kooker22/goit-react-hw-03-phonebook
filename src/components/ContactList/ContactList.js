import React from 'react';
import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
  </ul>
);

export default ContactList;
