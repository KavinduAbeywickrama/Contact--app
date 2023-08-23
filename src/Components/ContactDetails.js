import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";


const ContactDetails = (props) => {
    return (
        <div className = "main">
            <div className = "ui card centered">
                <div className = "image">
                    <img src = {user} alt = "user" />
                </div>
                <div className = "content">
                    <div className = "header">{props.contact.name}</div>
                    <div className = "description">{props.contact.email}</div>  
                </div>
            </div>
        </div>        
    );
};

export default ContactDetails;