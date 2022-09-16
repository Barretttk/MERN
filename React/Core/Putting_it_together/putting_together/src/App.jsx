import React, { Component } from 'react';
import PersonCard from './Components/PersonCard';

// ?parent.component

export class App extends Component {
  render() {
    return (
      <fieldset>
        <legend> Prop It Up</legend>
        <PersonCard
          firstName={"Doe"}
          lastName={"Jane"}
          age={45}
          hairColor={"Black"}
        />

        <PersonCard 
          firstName = {"Smith"}
          lastName = {"John"}
          age = {88}
          hairColor = {"Brown"} 
        />

        <PersonCard 
          firstName = {"Fillmore"}
          lastName = {"Millard"}
          age = {50}
          hairColor = {"Brown"} 
        />

        <PersonCard 
          firstName = {"Smith"}
          lastName = {"Maria"}
          age = {62}
          hairColor = {"Brown"} 
        />

      </fieldset>
    );
  }
}

export default App