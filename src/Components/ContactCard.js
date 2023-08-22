import React from "react";
import user from "../images/user.png";


const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    console.log(name);
    return (
        <div className = "item" style ={{display:"flex"}}>
            <img className="ui avatar image" src={user} alt = "user" style ={{float:"left"}} />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i className ="trash alternate outline icon" 
                style ={{color:"red", marginTop:"5px", paddingLeft:"90%"}}
                onClick={()=>props.clickHandler(id)}
                ></i>
        </div>
    );
};

export default ContactCard;