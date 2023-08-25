import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";

const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    const contact =  props.contact;
    const stateObject = {
        id,
        name,
        email,
      };
      const stateData = JSON.stringify(stateObject);

    return (
        <div className = "item" style ={{display:"flex"}}>
            <img className="ui avatar image" src={user} alt = "user" style ={{float:"left"}} />
                <div className="content">
                    <Link to={{ pathname: `/contact/${encodeURIComponent(stateData)}`}}>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                </div>
                <div>
                    <i className ="trash alternate outline icon" style ={{color:"red", marginTop:"7px", marginLeft:"900px" }} onClick={()=>props.clickHandler(id)}></i>
                </div>
                <div>
                    <Link to={{ pathname: `/edit/${encodeURIComponent(stateData)}`}}>
                    <i className ="edit alternate outline icon" style ={{color:"blue", marginTop:"7px" }}></i>
                    </Link>
                </div>                
        </div>
    );
};
export default ContactCard;