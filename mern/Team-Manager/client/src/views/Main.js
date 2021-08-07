import {React,useState,useEffect} from 'react'
import axios from 'axios'
import List from '../components/List';
import {Link} from "@reach/router"
import Head from '../components/head';
const Main = () => {
    const [players,setPlayers]=useState("");
    const [loaded,setLoaded]=useState(false);
    const [deletes,setDeletes]=useState(1)
    useEffect(() => {
      axios.get("http://localhost:8000/api/players")
      .then(res=>{setPlayers(res.data)
      setLoaded(true)
      })
    },[deletes,loaded])
   
    return (
        
        <div>
            <Head/>
            
        {loaded && (
            <List players={players} deletes={setDeletes}/>
        )}
        </div>
    
    )
}

export default Main
