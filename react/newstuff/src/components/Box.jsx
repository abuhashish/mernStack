import React from 'react'
import react, { useState } from 'react';
export const Box = (props) => {
  
    
    return (
        <div className="test" style={{ 
            display: 'flex',
            justifyContent: 'center'
        }}>
           
           {props.color.map(item=>(<div class="coloredbox"  style={{
        backgroundColor: item,
        width: '100px',
        height: '100px',
        
      }} >{item}</div>))}
           
        
                
        </div>
    )
}
export default Box;