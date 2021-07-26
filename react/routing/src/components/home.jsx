import React from 'react'

const Home = (props) => {
const name=window.location.pathname.substring(1,window.location.pathname.length)
const {id,color,bgcolor}=props;
    return (
        <div>
            {props.color!=null?<h1 style={{color:color,backgroundColor:props.bgcolor}}>{props.id}</h1>:name=="home" ? <h1>welcome</h1> : isNaN(name)?<h1>the world is {props.id}</h1>:<h1>the number is {props.id}</h1>}
            
        </div>
    )
}

export default Home
