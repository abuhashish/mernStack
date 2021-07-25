import React, { useState }from 'react'

const Show = (props) => {
    const[items,setItems]=useState(props.list)
    console.log(items)
    return (
        
        <div>
            
            {props.list.map((item,i)=>(<h1 key={i}>{item.task}</h1>))}
            <form >
            
            <button type="submit">deltte</button>
            <h1>________________________________</h1>
            </form> 
        </div>
    )
}

export default Show
