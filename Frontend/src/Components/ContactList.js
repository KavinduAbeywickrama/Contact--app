import React, {useRef} from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

const ContactList = (props) => {
    const inputEl = useRef("");
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

    // const getSearchTerm =() => {
    //     props.searchKeyword(inputEl.current.value);
    // };

    return (
        <div className ="main">                    
            <h2 style={{paddingTop:"50px"}}>Contact List
            <Link to ="/add">
                <button className ="ui button blue right" style={{float:"right"}}>Add Contact</button>
            </Link>  
            </h2>
            <div className ="ui search">
                <div className ="ui icon input">
                    <input ref={inputEl} type ="text" placeholder ="Search Contacts" className ="prompt" value={props.term} onChange={getSearchTerm}></input>
                    <i className ="search icon"></i>
                </div>
            </div>
            <div className ="ui celled list">{renderContactList.length > 0 ?renderContactList: "no contacts availabla"}</div>

        </div>
    )
}

export default ContactList;