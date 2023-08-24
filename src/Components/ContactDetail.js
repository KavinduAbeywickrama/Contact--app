import React from "react";
import user from "../images/kavi.jpg";
import {Link} from "react-router-dom";

const ContactDetail = (props) => {
    return (        
        <div className = "main">
            <div className = "ui card centered">
                <div className = "image">
                    console.log("props",props);
                    <img src = {user} alt = "user" />
                </div>
                <div className = "content">
                    <div className = "header">Kavi</div>
                    <div className = "description">Kavi.com</div>  
                </div>
            </div>
        </div>        
    );
};

export default ContactDetail;