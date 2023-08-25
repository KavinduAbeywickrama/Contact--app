import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";


function EditContact({ updateContactHandler }) {
  // Access URL parameter
  
  const navigate = useNavigate();
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
  const [name, setName] = useState(stateObject.name);
  const [email, setEmail] = useState(stateObject.email);
  const [id, setId] = useState(stateObject.id);

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    updateContactHandler({ name, email, id });
    setName("");
    setEmail("");
    setId("");
    navigate("/"); // Use navigate to change the route to the contact list
  }

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="ui button blue" type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditContact;