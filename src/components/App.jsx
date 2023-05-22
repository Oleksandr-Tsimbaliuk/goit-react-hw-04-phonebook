// import React, { Component } from 'react';
// import Form from './Form';
// import ContactsList from './ContactsList';
// import Filter from './Filter';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('Contacts');

//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const currentContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (currentContacts !== prevContacts) {
//       localStorage.setItem('Contacts', JSON.stringify(currentContacts));
//     }
//   }

//   handlerFormSubmit = contactData => {
//     if (
//       this.state.contacts.some(contact => contact.name === contactData.name)
//     ) {
//       alert(`Contact whith name ${contactData.name} is already exists`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, contactData],
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   filteredContacts = () => {
//     const { filter, contacts } = this.state;

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const value = this.filteredContacts();
//     return (
//       <div>
//         <Form onSubmit={this.handlerFormSubmit} title="Phonebook"></Form>
//         <Filter
//           filter={this.state.filter}
//           changeFilter={this.changeFilter}
//         ></Filter>
//         <ContactsList
//           contacts={value}
//           title="Contacts"
//           deleteContact={this.deleteContact}
//         ></ContactsList>
//       </div>
//     );
//   }
// }

import { useEffect, useState } from 'react';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlerFormSubmit = contactData => {
    if (contacts.some(contact => contact.name === contactData.name)) {
      alert(`Contact whith name ${contactData.name} is already exists`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, contactData]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => [
      prevContacts.filter(contact => contact.id !== contactId),
    ]);
  };

  const value = filteredContacts();
  return (
    <div>
      <Form onSubmit={handlerFormSubmit} title="Phonebook"></Form>
      <Filter filter={filter} changeFilter={changeFilter}></Filter>
      <ContactsList
        contacts={value}
        title="Contacts"
        deleteContact={deleteContact}
      ></ContactsList>
    </div>
  );
}

// ----------------------------------------------------------

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('Contacts');

//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const currentContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (currentContacts !== prevContacts) {
//       localStorage.setItem('Contacts', JSON.stringify(currentContacts));
//     }
//   }

//   handlerFormSubmit = contactData => {
//     if (
//       this.state.contacts.some(contact => contact.name === contactData.name)
//     ) {
//       alert(`Contact whith name ${contactData.name} is already exists`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, contactData],
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   filteredContacts = () => {
//     const { filter, contacts } = this.state;

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const value = this.filteredContacts();
//     return (
//       <div>
//         <Form onSubmit={this.handlerFormSubmit} title="Phonebook"></Form>
//         <Filter
//           filter={this.state.filter}
//           changeFilter={this.changeFilter}
//         ></Filter>
//         <ContactsList
//           contacts={value}
//           title="Contacts"
//           deleteContact={this.deleteContact}
//         ></ContactsList>
//       </div>
//     );
//   }
// }
