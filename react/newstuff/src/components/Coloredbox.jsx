import React,{ useState} from 'react'
export const Coloredbox = (props) => {
    const[newcolor,setNewColor]= useState("")
    const submit=(e)=> {
        e.preventDefault()
        props.onNewColor(newcolor)
    }
    
    return (
        <div>
            <form onSubmit={submit}>
            <label>Color</label>
            <input onChange= {e=> {setNewColor(e.target.value)}}/> 
            <button type="submit">Submit</button>
            </form>
          
        </div>
    )
}
export default Coloredbox;