import {React, useEffect,useState} from 'react'
import AuthorForm from '../components/authorForm'
import axios from 'axios';

const New = (props) => {
    const onSubmit = Name => {
        axios.post('http://localhost:8000/api/author', 
        {Name}
    )
            
    }
    return (
        
        <div>
            <AuthorForm name="" onSubmit={onSubmit}/>
        </div>
    )
}

export default New
