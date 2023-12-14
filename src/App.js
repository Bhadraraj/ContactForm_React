import React, { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import Header from './components/Header';
import ContactList from './components/ContactList';
// import {uuid} from 'uuidv4';



function App() {
  const LOCAL_STORAGE_KEY = "contacts"

  const [contacts, setContact] = useState([])


  const addContactHandler = (contact) => {
    console.log(contact);
    setContact([...contacts, contact])
    // setContact([...contacts, {id:uuid(),...contacts}])
  }
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContact(newContactList)
  }
  useEffect(() => {
    try {
      const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      console.log("Retrieved Contacts:", retrievedContacts);
      if (retrievedContacts) setContact(retrievedContacts);
    } catch (error) {
      console.error("Error parsing JSON from local storage:", error);
    }
  }, []);

  useEffect(() => {
    console.log("Saving Contacts to Local Storage:", contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    < >  <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />


    </>
  );
}

export default App;
