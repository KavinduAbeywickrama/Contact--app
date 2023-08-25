import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import './App.css';
import ContactDetail from './ContactDetail'
import api from "../api/contacts";
import EditContact from "./EditContact"; // Adjust the file path as needed



function App() {
  
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Retrive Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };



  const addContactHandler = async (contact) => {
    console.log('another console',contact);

    const request = {
      id: uuidv4(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(contacts.map((contact) => {
      return contact.id === id ? { ...response.data } : contact;
    }));

  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact)=>{ 
      return contact.id !== id;
    });
    setContacts(newContactList);
  };


  const searchHandler = () => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else{
      setSearchResults(contacts);
    }
  };

 

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContacts) setContacts(retrieveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };


    getAllContacts();
  }, []);
  

  useEffect(() => {
   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (

    <div className="ui container">
      <Header />
      <Router>        
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit/:id" element={<EditContact updateContactHandler={updateContactHandler} />} />
          <Route path="/" element={<ContactList contacts {...searchTerm.length <1 ? contacts : searchResults} getcontactId={removeContactHandler} term={searchTerm} searchKeyword={searchHandler}/>} />
          <Route path="/contact/:id" element={<ContactDetail/>} />
        </Routes>        
      </Router>
    </div>       
  );
}

export default App;

