import React from 'react'
import { Link } from '@reach/router'

const List = (props) => {
    console.log(props.author)
    return (
        <div>
        <h1>Favourite authors {props.author.length}</h1>
        <Link to="/new">Add an author</Link>
        <h3>we have quotes by :-</h3>
        <table>
            <thead>
            <tr>
                <th>Author</th>
                <th>Actions available</th>
            </tr>
            </thead>
            <tbody>
            {props.author.map((auth,idx) => {
           return <tr key={idx}>
                    <td >{auth.Name}</td>
                    <td><button>Delete</button> <button>Update</button></td>
                    </tr>
            })}
            </tbody>
        </table>
    </div>
    )
}

export default List
