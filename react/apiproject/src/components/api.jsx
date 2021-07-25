import React, { useState } from 'react'
import {useEffect} from 'react'

const Api = () => {
    const [pokemon, setPokemon] = useState([]);
 
    const fetchapi=() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
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
