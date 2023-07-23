import React,{ useState, useEffect } from 'react';
import { uuid } from 'uuidv4' ;
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import './App.css';

function App() {
  
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts, setCOntacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setCOntacts([...contacts, { id: uuid(), ...contacts} ]);
  };

  useEffect(()=>{
    const retriveCOntacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveCOntacts)setCOntacts(retriveCOntacts)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

  },[contacts])

  return (
    <div className ="ui cantainer">
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = { contacts}/>
    </div>
  );
}

export default App;
