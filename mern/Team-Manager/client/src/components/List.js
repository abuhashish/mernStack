import React from 'react'
import { Link  } from '@reach/router'
import axios from 'axios'
import { navigate } from "@reach/router"
const List = (props) => {
    console.log(props.players)
    const deleteb=(id)=>{
        axios.delete("http://localhost:8000/api/player/" +id)
        .then(props.deletes(props.deletes+1))
        .then(()=>navigate("/"))
    }
    return (
        <div>
     
        <p><Link to="/">List</Link> || <Link to="/new">Add Player</Link></p>
        <table>
            <thead>
            <tr>
                <th>Team Name</th>
                <th>preferd position</th>
                <th>action</th>
            </tr>
            </thead>
            <tbody>
            {props.players.map((auth,idx) => 
            <tr key={idx}>
                    <td >{auth.Name}</td>
                    <td>{auth.Position}</td>
                    <td><button onClick={e=>deleteb(auth._id)}>Delete</button></td>
            </tr>
            )}
            </tbody>
        </table>
    </div>
    )
}

export default List
