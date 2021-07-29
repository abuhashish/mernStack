import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link , navigate} from '@reach/router';
export default props => {
    
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    const deleteprod=(id)=>{
        axios.delete("http://localhost:8000/api/product/" +id)
        .then(()=>navigate("/product/"))
    }
    return (
        <div>
            <p>Title: {person.Title}</p>
            <p>Price: {person.Price}</p>
            <p>Desc: {person.Desc}</p>
            <Link to={"/product/" + person._id + "/edit"}>
                Edit
            </Link>
            <button onClick={(e)=>{deleteprod(person._id)}}>
                delete
            </button>
        </div>
    )
}