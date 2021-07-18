import React, { useState } from 'react'


const PersonCard = props => {
    const [state, setState] = useState({
        age: props.age
    });
    const agehandler=(e)=>setState({ age:state.age+=1 });
    return(
        <div>
             <h1>my name is {props.firstName} {props.lastName}</h1>
            <p>my age is {state.age}</p>
            <button onClick={agehandler}>add</button>
        </div>
    );
}

export default PersonCard
