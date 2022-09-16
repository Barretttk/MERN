import React from 'react'

const People = (props) => {
    const {details} = props;
  return (

    <div>

      <h1>{details.name}</h1>
      <p>Height : {details.height} cm</p>
      <p>Mass : {details.mass} kg</p>
      <p>Hair Color : {details.hair_color}</p>
      <p>Skin Color : {details.skin_color}</p>
      <p>Eye Color : {details.eye_color}</p>
      <p>Birth Year : {details.birth_year}</p>
      <p>Gender : {details.gender}</p>
    </div>
  );
  }

export default People;


//! Modulerized constructor function