import React, {useState } from 'react'
import axios from 'axios'


const AxiosPokemon = () => {

    let [pokemon, setPokemon] = useState ([])

    const getThem = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) => {
            console.log("got response from api. Data is->",response);
            setPokemon(response.data.results);
        })

        .catch ((err) => {
            console.log("something went wrong",err)
        })
}

  return (
    <div>
            <h1> What are the Pokemon</h1>

          <button className ="btn btn-primary w-100" onClick={getThem}>Catch'em All</button>
          {pokemon.map((catchp,idx) => {
              return (
                  <div>
                <h4>{catchp.name}</h4>
                </div>
            )
          })}
        </div>
        );
}

export default AxiosPokemon