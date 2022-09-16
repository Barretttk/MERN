import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import People from './People';
import Planets from './Planets';
import StarShips from './StarShips';
import Vehicles from './Vehicles';
import Films from './Films';
import obe from './Obe.jpeg';



const ShowInfo = () => {
    //every time a state variable updates, the component re-renders
    //every time the component re-renders, the component re-renders, and re-runs
    //-> EXCEPT the code inside the useEffect function. Only runs when told to do so.
        
    const { category, id } = useParams();   // information from route parameters
    console.log("id is this",id);
    let [details, setDetails] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then((response) => {
                console.log("please wait...",response);
            setDetails(response.data);
            })
            .catch(err=>{
                console.log(err);
                setDetails({});
                })
},[category,id])

  return (
    <div>
      {
      !details.name ? (<div>
        <p> Theres are not the Droids you are lookign for...</p>
        <img src={obe} />
        </div>
      ):

      category == "people" ? (
        <People details={details} />
      ) : category == "planets" ? ( //else if category == "people"?
        <Planets details={details} />
      ) : category == "films" ? (
        <Films details={details} />
      ) : category == "starships" ? (
        <StarShips details={details} />
      ) : category == "vehicles" ? (
        <Vehicles details={details} />
      ) : null}
    </div>
  );

}

export default ShowInfo;