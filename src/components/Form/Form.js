import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import styles from './Form.module.css';
class Form extends Component {
  static propTypes = {
    state: propTypes.objectOf(propTypes.string.isRequired),
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const inputId = uuidv4();
    const { name, value } = e.currentTarget;
    this.setState({ id: inputId, [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.input}
            ></input>
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              className={styles.input}
            ></input>
          </label>
        </div>
        <button type="submit" className={styles.buttonForm}>
          add contact
        </button>
      </form>
    );
  }
}
export default Form;
