import {
  Container,
  TitleLIstContacts,
  Titel,
  NoContactMessage,
} from './App.styled';
import { ContactForm } from '../ContatctForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setfilter] = useState('');

  useEffect(() => {
    const contactsJson = localStorage.getItem('contactsData');

    if (JSON.parse(contactsJson).length === 0) {
      return;
    }
    setContacts(JSON.parse(contactsJson));
  }, []);

  useEffect(() => {
    localStorage.setItem('contactsData', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contactСheck = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (!contactСheck) {
      const contact = {
        id: name,
        name: name,
        number: number.match(/\d{3}(?=\d{2,3})|\d+/g).join('-'),
      };

      setContacts(prevContact => [contact, ...prevContact]);

      resetForm();
    } else {
      alert(`${name} is alreadi in contacts`);
    }
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const showFiltered = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const changeFilter = e => {
    setfilter(e.target.value);
  };

  const visibalFiltr = showFiltered();
  return (
    <section>
      <Container>
        <Titel>Phonebook</Titel>
        <ContactForm handleSubmit={handleSubmit} />
        <TitleLIstContacts>Contacts</TitleLIstContacts>

        {contacts.length > 0 ? (
          <>
            <Filter changeFilter={changeFilter} />
            <ContactList
              visibalFiltr={visibalFiltr}
              deleteContact={deleteContact}
            />
          </>
        ) : (
          <NoContactMessage>No contact yet</NoContactMessage>
        )}
      </Container>
    </section>
  );
};
