import React, { useState }from 'react'
import  { useEffect }from 'react'
import axios from 'axios'
import { navigate } from "@reach/router"
const Search = (props) => {
    const [selectValue,setSelectValue]=useState("people")
    const[id,setId]=useState("")
    const[info,setInfo]=useState("")
    const string="/"+selectValue+"/"+id;
    const submit=(e)=>{
        e.preventDefault()
        navigate(string)
    }
    
    
    return (
        <div>
        <form>
        <select  onChange={e=>setSelectValue(e.target.value)}>
            
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
        </select>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={submit} type="submit">Submit</button>
        
        </form>
       
        </div>
    )
}

export default Search
