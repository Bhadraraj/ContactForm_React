import React from 'react';
import ContactCard from './ContactCard';
const ContactList = ({ contacts }) => {
  const delectContactHandler = (id) => {
    props.getContactId(id);
  }
  const renderedContactList = contacts.map((contact, index) => (
    <ContactCard key={index} contact={contact} clickHandler={delectContactHandler} />
  ));
  return <div>{renderedContactList}</div>;
};


export default ContactList
