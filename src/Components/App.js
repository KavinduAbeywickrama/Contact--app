import React,{ useState } from 'react';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import './App.css';

function App() {
  const [contacts, setCOntacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setCOntacts([...contacts, contact]);
  }
  return (
    <div className ="ui cantainer">
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = { contacts}/>
    </div>
  );
}

export default App;
