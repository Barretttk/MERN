import React, { Component } from "react";

// ?child.Component

export default class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        age: this.props.age
  }
}

  render() {
    const { firstName, lastName, hairColor } = this.props;
    const { age } = this.state;
    const countUp = () => {
        this.setState({
            age: age + 1    //? currnet age + 1 (per click)
            });
    }

    return (
      <fieldset>
        <legend>Person Card</legend>
        <p>
          <h1>
            {firstName}, {lastName}
          </h1>
          Age: { age } | Hair Color : {hairColor} | 
          <button onClick={countUp}>
            Birthday Button for {firstName}, {lastName}
          </button>
        </p>
      </fieldset>
    );
  }
}


