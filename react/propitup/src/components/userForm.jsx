import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log(newUser);
        setHasBeenSubmitted( true );
    };
    
    return(
        <div>
        <header>
        <form onSubmit={ createUser }>
        {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
    }
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) =>  setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) =>  setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) =>  setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        </header>
        
        <div>
            <h3>FirstName: {firstname}</h3>
            <h3>Lastname: {lastname}</h3>
            <h3>email: {email}</h3>
            
        </div>
        
        </div>

    );
};
    
export default UserForm;