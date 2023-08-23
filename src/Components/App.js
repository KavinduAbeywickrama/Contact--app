import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import './App.css';
import ContactDetails from './ContactDetails';

function App() {
  
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log('another console',contact);
    setContacts([...contacts, { id: uuidv4(), ...contact} ]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{ 
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  

  return (
    // <div className ="ui cantainer">
    //   <Router>
    //   <Header/>
    //     <Routes>
    //         <Route path ="/add" render ={(props) => (<AddContact {...props} addContactHandler = {addContactHandler}/>) }/>
    //         <Route path ="/"  render = {(props) => (<ContactList {...props} contacts = { contacts} getcontactId ={removeContactHandler}/>)} />          
    //     </Routes>
    //   </Router>            
    // </div>

    <div className="ui container">
      <Header />
      <Router>        
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getcontactId={removeContactHandler} />} />
        </Routes>
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Router>
    </div>       
  );
}

export default App;

