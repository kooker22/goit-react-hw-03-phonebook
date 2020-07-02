import React, { Component } from 'react';
import propTypes from 'prop-types';
import Form from './components/Form';
import ContactList from './components/ContactList';
import 'modern-normalize/modern-normalize.css';
import Filter from './components/Filter/';
import { saveToLS, getFromLS } from './utils/helper';
import styles from './App.module.css';

class Phonebook extends Component {
  static defaultProps = {
    filter: '',
  };
  static propTypes = {
    contacts: propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
      }),
    ),
    filter: propTypes.string.isRequired,
  };
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.notifyExistingName(data);
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  notifyExistingName = data => {
    const existingName = this.state.contacts.find(
      contact => contact.name === data.name,
    );
    if (existingName) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState({ contacts: [...this.state.contacts, data] });
    }
  };
  deleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      saveToLS('contacts', this.state.contacts);
    }
  }
  componentDidMount() {
    this.setState({ contacts: getFromLS('contacts') });
  }
  render() {
    const { contacts, filter } = this.state;
    const normolizeContact = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeContact),
    );

    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.contents}>Phonebook</h1>
          <div className={styles.wrapper}>
            <Form onSubmit={this.formSubmitHandler} />
            <Filter
              contacts={contacts}
              value={filter}
              onChange={this.changeFilter}
            />
          </div>
          <h2 className={styles.contents}>Contacts</h2>
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
export default Phonebook;
