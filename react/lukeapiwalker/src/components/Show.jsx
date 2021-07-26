import React, { useState }from 'react'
import  { useEffect }from 'react'
import axios from 'axios'
const Show = (props) => {
    const[info,setInfo]=useState("")
    useEffect(() => {
        axios.get('https://swapi.dev/api/'+props.one+'/'+props.two)
        .then(response => setInfo(response.data))
    }, [props.one,props.two]);
    return (
        <div>
        
        <h1>Name:{info.name}</h1>
        <h3>Mass:{info.mass}</h3>
        <h3>Height:{info.height}</h3>
        </div>
    )
}

export default Show
