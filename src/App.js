import React, { Component } from 'react';
import propTypes from 'prop-types';
import Form from './components/Form';
import ContactList from './components/ContactList';
import 'modern-normalize/modern-normalize.css';
import Filter from './components/Filter/';
import { saveToLS, getFromLS } from './utils/helper';
import styles from './App.module.css';
import { v4 as uuidv4 } from 'uuid';

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
    filter: propTypes.string,
  };
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.notifyExistingName(data);
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  notifyExistingName = data => {
    const newContact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };
    const existingName = this.state.contacts.find(
      contact => contact.name === data.name,
    );
    if (existingName) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState({ contacts: [...this.state.contacts, newContact] });
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
    console.log(this.state);
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
          {contacts.length > 0 && <h2 className={styles.contents}>Contacts</h2>}
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
