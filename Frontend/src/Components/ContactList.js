import React, { useRef, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getcontactId(id);
  };

  const filteredContacts = props.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main">
      <h2 style={{ paddingTop: "50px" }}>
        Contact List
        <Link to="/add">
          <button
            className="ui button blue right"
            style={{ float: "right" }}
          >
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={searchTerm}
            onChange={() => setSearchTerm(inputEl.current.value)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      {filteredContacts.length > 0 ? (
        <div className="ui celled list">
          {filteredContacts.map((contact) => (
            <ContactCard
              contact={contact}
              clickHandler={deleteContactHandler}
              key={contact.id}
            />
          ))}
        </div>
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};

export default ContactList;
