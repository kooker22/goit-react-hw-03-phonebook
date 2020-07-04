//Core
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import 'modern-normalize/modern-normalize.css';

//Components
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter/';
//Instruments

import { saveToLS, getFromLS } from './utils/helper';

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

    return (
      <>
        <div className="container">
          <h1 className="contents">Phonebook</h1>
          <div className="wrapper">
            <Form onSubmit={this.formSubmitHandler} />
            <Filter
              contacts={contacts}
              value={filter}
              onChange={this.changeFilter}
            />
          </div>
          {contacts.length > 0 && <h2 className="contents">Contacts</h2>}
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
