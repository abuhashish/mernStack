import { navigate } from '@reach/router'
import React from 'react'

export default props => {
    return (
        <div>
            <ul>
            {props.products.map((product, idx)=>{
                let link="/product/"+product._id
                
                return <li><button onClick={()=>navigate(link)} key={idx}>{product.Title}, {product.Price} ,{product.Desc} </button></li>
            })}
            </ul>
        </div>
    )
}