import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { navigate , Link } from "@reach/router"
import Head from '../components/head';
const New = () => {
    const [Name,setName]=useState("")
    const [Position,setPosition] = useState("")
    const [valid,setValid]=useState(false)
    const ValidCheck=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/player",{Name,Position})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        
    }
    return (
        <div>
            <Head/>
            <p><Link to="/">List</Link> || <Link to="/new">Add Player</Link></p>
            <form>
                <label htmlFor="Name">Name : Name</label>
                <input type="text" name="Name" onChange={(e)=>{setName(e.target.value)
                     if(Name.length>1) 
                     setValid(true)
                     }}/>
                <label v="Position">refered Position</label>
                <input type="text" name="Position"/>
                {valid && <button onClick={(e)=>ValidCheck(e)} > Add</button>}
                {!valid && <button disabled={true} onClick={ValidCheck}> Add</button>}
               
            </form>
        </div>
    )
}

export default New
