import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log('props',props);

    const deleteContactHandler = (id) => {
        props.getcontactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        //console.log("This is the id",contact.id);
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key = {contact.id}></ContactCard>
        );                 
    });

    return (
        <div className ="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;