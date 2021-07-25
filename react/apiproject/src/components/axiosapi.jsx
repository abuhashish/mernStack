import React, { useState } from 'react'
import axios from 'axios';

const Api = () => {
    const [pokemon, setPokemon] = useState([]);
 
    const fetchapi=() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokemon(response.data))
    };
    return (
        <div>
            
                <button type="submit" onClick={fetchapi}>Fetch Pokemon</button>
                <ul>
                    {pokemon.map(p =>
                        <li>{p.name}</li>
                        )}
                </ul>
        </div>
    )
}

export default Api
