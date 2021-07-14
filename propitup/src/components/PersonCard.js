import React, { Component } from 'react'

const PersonCard = props => {
    return(
        <div>
             <h1>my name is {props.firstName} {props.lastName}</h1>
            <p>my age is {props.age}</p>
        </div>
    );
}

export default PersonCard
