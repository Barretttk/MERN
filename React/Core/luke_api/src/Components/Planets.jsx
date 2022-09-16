import React from 'react'

const Planets = (props) => {
    const {details} = props
  return (



    <div>
        <h1>{details.name}</h1>
        <p>Rotation Period : {details.rotation_period} </p>
        <p>Diameter : {details.diameter} </p>
        <p>Climate : {details.climate}</p>
        <p>Terrain : {details.terrain}</p>
        <p>Surface Water : {details.surface_water}</p>
        <p>Population : {details.population}</p>
    </div>
  );
}

export default Planets