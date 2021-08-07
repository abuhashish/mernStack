import React from 'react'
import { Link  } from '@reach/router'
import axios from 'axios'
import { navigate } from "@reach/router"
const List = (props) => {
    
    const gameid=props.gameid
    const deleteb=(auth)=>{
        let url="http://localhost:8000/api/player/"+auth._id
        let game1=auth.status.game1
        let game2=auth.status.game2
        let game3= auth.status.game3
        
        axios.put(url , { status:{game1:1,game2:2,game3:1} })
       
        .then(()=>navigate("/game/1"))
    }
    
    
    return (
        <div>
     
        <p><Link to="/game/1">Game1</Link> || <Link to="/game/2">Game2</Link> || <Link to="/game/3">Game3</Link></p>
        <table>
            <thead>
            <tr>
                <th>Team Name</th>
                <th>action</th>
            </tr>
            </thead>
            <tbody>
            {props.players.map((auth,idx) => 
            {
            return <tr key={idx}>
                    <td >{auth.Name}</td>
                    {auth.status.game1 == 0?<td><button  style={{backgroundColor: 'yellow'}} onClick={e=>deleteb(auth)}>Undecided</button> <button  onClick={e=>deleteb(auth)}>Not playing</button> <button onClick={e=>deleteb(auth)}>Playing</button> </td>
                    :auth.status.game1 == 1?<td><button   onClick={e=>deleteb(auth)}>Undecided</button> <button  style={{backgroundColor: 'red'}} onClick={e=>deleteb(auth)}>Not playing</button> <button onClick={e=>deleteb(auth)}>Playing</button> </td>
                    :<td><button   onClick={e=>deleteb(auth)}>Undecided</button> <button  onClick={e=>deleteb(auth)}>Not playing</button> <button style={{backgroundColor: 'green'}} onClick={e=>deleteb(auth)}>Playing</button> </td>}
                    
            </tr>}
            )}
            </tbody>
        </table>
    </div>
    )
}

export default List
