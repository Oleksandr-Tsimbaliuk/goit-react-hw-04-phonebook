// import React, { Component } from 'react';
// import { StyledForm } from './Form.styled';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

// export default class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   // handleInputName = ({ target: { name, value } }) => {
//   //   this.setState({ [name]: value });
//   // };
//   // handleInputNamber = ({ target: { name, value } }) => {
//   //   this.setState({ [name]: value });
//   // };

//   handleInputName = event => [
//     this.setState({ name: event.currentTarget.value }),
//   ];

//   handleInputNamber = event => {
//     this.setState({ number: event.currentTarget.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const contactData = {
//       name: this.state.name,
//       number: this.state.number,
//       id: nanoid(),
//     };

//     this.props.onSubmit(contactData);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <StyledForm onSubmit={this.handleSubmit}>
//         <h2>{this.props.title}</h2>
//         <label className="form-label">
//           <span>Name</span>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleInputName}
//           />
//         </label>

//         <label className="form-label">
//           <span>Number</span>
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleInputNamber}
//           />
//         </label>

//         <button className="form-btn" type="submit">
//           add contact
//         </button>
//       </StyledForm>
//     );
//   }
// }

// Form.propType = {
//   onSubmit: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired,
// };

import { useState } from 'react';
import { StyledForm } from './Form.styled';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const handleInputName = event => {
  //   setName(event.currentTarget.value);
  // };

  // const handleInputNumber = event => {
  //   setNumber(event.currentTarget.value);
  // };

  const handleChamge = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <StyledForm>
      {/* <h2>{this.props.title}</h2> */}
      <label className="form-label">
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChamge}
        />
      </label>

      <label className="form-label">
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChamge}
        />
      </label>

      <button className="form-btn" type="submit">
        add contact
      </button>
    </StyledForm>
  );
}
