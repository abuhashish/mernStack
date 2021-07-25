import React,{useState} from 'react'

const Json = () => {
    const [state,setState]=useState()
    const fetchapp=()=>{
        fetch("https://swapi.dev/api/planets/1/")
        .then((response)=>{
            response.json()
            .then((jsonResponse)=>{
                console.log(jsonResponse)
                setState(jsonResponse)
            })
        })
        .catch((error)=>{console.log(error)})  
    }
    fetchapp()
    return (
        <div>
            <h1>test</h1>
        </div>
    )
}

export default Json
