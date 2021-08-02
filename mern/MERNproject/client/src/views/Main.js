import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import Productlist from '../components/Productlist';
import axios from 'axios';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(1);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setPeople(res.data);
            });
    },[loaded])

    const onSubmitHandler = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(setLoaded(loaded+1))
            .catch(err=>console.log(err))
    }
    return (
        <div>
           <ProductForm loaded={setLoaded} onsubmit={onSubmitHandler} initialTitle=""
          intialDesc=""
          initialPrice=""/>
           <Productlist products={people}/>
        </div>
    )
}
