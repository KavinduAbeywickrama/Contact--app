import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

const ContactList = (props) => {
    console.log('props',props);

    const deleteContactHandler = (id) => {
        props.getcontactId(id);
    };

    const contacts = [
    {
        id:"1",
        "name":"Saurabh",
        "email":"saurabh@gmail.com",
    },
    ];
    const renderContactList = contacts.map((contact) => {
        //console.log("This is the id",contact.id);
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key = {contact.id}></ContactCard>
        );                 
    });
    return (
        <div className ="main">
            <br></br><br></br>          
            <h2>Contact List
            <Link to ="/add">
                <button className ="ui button blue right">Add Contact</button>
            </Link>  
            </h2>
            <div className ="ui celled list">{renderContactList}</div>
        </div>
    )
}

export default ContactList;