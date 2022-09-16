import React from 'react'

const StarShips = (props) => {
    const {details} = props
return (

      <div>
        <h1>{details.name}</h1>
        <p>Model : {details.model} </p>
        <p>Starship : {details.starship_class} </p>
        <p>Manufacturer : {details.manufacturer}</p>
        <p>Crew Size : {details.crew}</p>
      </div>
  );
}

export default StarShips;