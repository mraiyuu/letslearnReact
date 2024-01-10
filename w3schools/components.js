import React from "react";

//class component
class Car extends React.Component {
  render() {
    return <h1>Hi, I am a car</h1>;
  }
}

//functional component
function Car() {
  return <h2>Hi, I am a car</h2>;
}

//class component with state
class Car2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "ford",
      model: "mustang",
      color: "red",
      year: 1964,
    };
  }

  render() {
    return (
      <div>
        <h1>My car</h1>
      </div>
    );
  }
}

//Accesing class components with state
class Car3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "BMW",
      model: "M4",
      color: "red",
      year: 2004,
    };
  }
  render() {
    return (
      <div>
        <h1>My car is {this.state.brand}</h1>
        <p>
          It is a {this.state.brand}
          {this.state.model}
          color {this.state.color}
          made in {this.state.year}
        </p>
      </div>
    );
  }
}

//Changing state of an object
class Car3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "audi",
      model: "A5",
      color: "grey",
      year: "2018",
    };
  }

  changeColor = () => {
    this.setState({ color: "black" });
  };

  render() {
    return (
      <div>
        <h1>
          My car is an {this.state.brand}
          the model is {this.state.model}
          and color is {this.state.color}
          procuction year was {this.state.year}
        </h1>
      </div>
    );

    <div>
      <button type="button" onClick={this.changeColor}>
        Change color
      </button>
    </div>;
  }
}
