import React, { useState, useEffect } from "react";
import { Link , navigate} from '@reach/router'
import axios from 'axios';
const AuthorForm = (props) => {
    const{name,onSubmit}=props;
    const[Name,setName]=useState(name)
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();
        //Send a post request to our API to create a Book
        onSubmit(Name)
            .then(res=>console.log(res)) // If successful, do something with the response. 
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }
    return (
        
        <div>
           
            <label>Name</label>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <input onChange={(e)=>setName(e.target.value)}  value={Name} />
            <button onClick={onSubmitHandler}>Submit</button>
            <button onClick={()=>{navigate("/")}}>Cancel</button>
             
        </div>
    )
}

export default AuthorForm
