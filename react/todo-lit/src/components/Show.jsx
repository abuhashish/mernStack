import React, { useState } from 'react'
import {useEffect} from 'react'

const Show = (props) => {
    const[items,setItems]=useState(props.list)
    const deleteTask=i=>{
        let array=items;
        console.log(items)
        array.splice(i,i)
        console.log(array)
        setItems(array)
        console.log("hey")
        
    }
    useEffect(() => {
        setItems(props.list);
    }, [props.list])
    return (
        
        <div>
            
            {items.map((item,i)=>(<h1 key={i}>{item.task} <button onClick={e=>deleteTask(i)}>Delete</button></h1>))}    
            <h1>________________________________</h1>
            
        </div>
    )
}

export default Show
