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

import React, { Component } from 'react';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('Contacts');

    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const currentContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (currentContacts !== prevContacts) {
      localStorage.setItem('Contacts', JSON.stringify(currentContacts));
    }
  }

  handlerFormSubmit = contactData => {
    if (
      this.state.contacts.some(contact => contact.name === contactData.name)
    ) {
      alert(`Contact whith name ${contactData.name} is already exists`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactData],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const value = this.filteredContacts();
    return (
      <div>
        <Form onSubmit={this.handlerFormSubmit} title="Phonebook"></Form>
        <Filter
          filter={this.state.filter}
          changeFilter={this.changeFilter}
        ></Filter>
        <ContactsList
          contacts={value}
          title="Contacts"
          deleteContact={this.deleteContact}
        ></ContactsList>
      </div>
    );
  }
}
