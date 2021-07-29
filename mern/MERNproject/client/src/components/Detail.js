import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    return (
        <div>
            <p>Title: {person.Title}</p>
            <p>Price: {person.Price}</p>
            <p>Desc: {person.Desc}</p>
        </div>
    )
}