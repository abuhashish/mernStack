import React from 'react'
import axios from 'axios'
import List from '../components/List'
import {useState, useEffect} from 'react'
const Main = () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(1);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>setAuthor(res.data))
    },[loaded])
    
    return (
        <div>
        {loaded && (
            <List author={author} />
        )}
        </div>
    );
}

export default Main
