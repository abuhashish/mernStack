import React,{ useState} from 'react'

const Todo = (props) => {
    const[Task,setTask]=useState("")
    
    const handleSubmit=(e)=>{
        
        if(Task){
        props.onLift(Task)
        }
        setTask('')
        
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={Task} onChange={(e) =>setTask(e.target.value)}/>
            <button type="submit" >Add</button>
            </form>
        </div>
    )
}

export default Todo
