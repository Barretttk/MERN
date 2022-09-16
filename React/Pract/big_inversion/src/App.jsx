import React from 'react'
import PersonCard from './Components/PersonCard';
import Darkly from "./Darkly.css";
import { personscard } from './Data/personcards';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        {
          personscard.map((person, index)=>{
            return (
              <PersonCard 
              key={index}
              fullName={person.fullName}
              age={person.age}
              hairColor={person.hairColor}
              />
              )
            })
          }
        </div>
      </div>
    </div>
    )
  }



export default App;