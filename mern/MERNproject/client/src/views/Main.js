import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import Productlist from '../components/Productlist';
import axios from 'axios';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
           <ProductForm/>
           <Productlist products={people} />
        </div>
    )
}