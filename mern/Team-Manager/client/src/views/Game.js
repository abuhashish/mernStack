import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Listgame from '../components/Listgame';
import {Link} from "@reach/router"
import Head from '../components/head';
const Game = (props) => {
    const [players,setPlayers]=useState("");
        const [loaded,setLoaded]=useState(false);
        const [deletes,setDeletes]=useState(1)
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then(res=>{setPlayers(res.data)
        setLoaded(true)
        })
      },[deletes,loaded])
    const gameid=props.id
    
    return (
        <div>
            <Head/>
            {loaded && (
            <Listgame players={players} deletes={setDeletes} gameid={gameid}/>
        )}
        </div>
    )
}

export default Game
