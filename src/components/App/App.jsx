import React, { Component } from 'react';
import { Container, TitleLIstContacts, Titel } from './App.styled';
import { ContactForm } from '../ContatctForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsJson = localStorage.getItem('contactsData');
    if (contactsJson) {
      this.setState({ contacts: JSON.parse(contactsJson) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contactsData', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = {
      id: name,
      name: name,
      number: number.match(/\d{3}(?=\d{2,3})|\d+/g).join('-'),
    };

    const contactСheck = this.state.contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    !contactСheck
      ? this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }))
      : alert(`${name} is alreadi in contacts`);

    resetForm();
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  showFiltered = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const visibalFiltr = this.showFiltered();
    return (
      <section>
        <Container>
          <Titel>Phonebook</Titel>
          <ContactForm handleSubmit={this.handleSubmit} />
          <TitleLIstContacts>Contacts</TitleLIstContacts>
          <Filter changeFilter={this.changeFilter} />
          {this.state.contacts.length > 0 && (
            <ContactList
              visibalFiltr={visibalFiltr}
              deleteContact={this.deleteContact}
            />
          )}
        </Container>
      </section>
    );
  }
}
