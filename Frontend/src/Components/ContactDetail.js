import React from "react";
import user from "../images/kavi.jpg";
import { Link, useParams, useLocation } from "react-router-dom"; 


const ContactDetail = (props) => {
        // Access URL parameter
        const location = useLocation();
        const { pathname } = location;
        // Extract and decode the data parameter manually from the pathname
        const dataParameter = pathname.split('/').pop();
        const decodedData = decodeURIComponent(dataParameter);
        console.log(decodedData)
        // Decode the URL parameter (JSON string) and parse it into an object
        let stateObject = {};

        try {
            stateObject = JSON.parse(decodedData);
            console.log('json',stateObject)
        } catch (error) {
            console.error('Error parsing JSON:', error);
  }
    //console.log(stateObject)
    return (        
        <div className = "main">
            <div className = "ui card centered">
                <div className = "image">                   
                    <img src = {user} alt = "user" />
                </div>
                <div className = "content">
                    <div className = "header">{stateObject.name}</div>
                    <div className = "description">{stateObject.email}</div>  
                </div>                   
            </div>
            <div className = "center-div">
                    <Link to = "/">
                        <button className = "ui button blue center">Back to Contact List</button>
                    </Link>
            </div>                 
        </div>        
    );
};

export default ContactDetail;