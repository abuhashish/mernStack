import React, { useState } from 'react'
const Form = (props) => {
    const [firstname,setFirstname] = useState("");
    const[nameError,setNameError] = useState("");
    const[lnameError,setlNameError] = useState("");
    const [lastname,setLastname] = useState("");
    const[emailError,setEmailError]=useState("");
    const [email, setEmail] = useState("");
    const[passwordError,setPasswordError]=useState("");
    const [password, setPassword] = useState("");  
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {  email, password };
        console.log(newUser);
      
    };
    const handleFirstname = e => {
        setFirstname(e.target.value)
        if (firstname.length < 2) {
          setNameError("first name must be at least 2 characters");
        }
        else
            setNameError("");
        
     
        e.preventDefault();
      };
      const handleLastname = e => {
        setLastname(e.target.value)
        if (lastname.length < 2) {
          setlNameError("last name must be at least 2 characters");
        }
        else
            setlNameError("");
        
     
        e.preventDefault();
      };
      const handleEmail = e => {
        setEmail(e.target.value)
        if (email.length < 5) {
            setEmailError("email must be atleast 5 characters");
        }
        else
            setEmailError("");
        
     
        e.preventDefault();
      };
      const handlePassword = e => {
        setPassword(e.target.value)
        if (password.length < 8) {
            setPasswordError("password must be atleast 8 chars");
        }
        else
            setPasswordError("");
        
     
        e.preventDefault();
      };
return(    
<form >
                {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                }       
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange= {handleFirstname}  />
            </div>
            {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                }
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ handleLastname } />
            </div>
            {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
            </div>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
            </div>
            <input type="submit" value="Create User" />
        </form>

)
}
export default Form
