import React, { useState } from "react";
import { ReactDOM } from "react";

//read state
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}</h1>;
}

//update state
function FavoriteColor2() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}</h1>
      <button type="button" onChange={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
}


//updating array or object 
function Car() {
    const [color, setColor] = useState({
        brand: 'BMW',
        model: 'M4',
        year: '2018',
        color: 'black',

    });

    const updateColor = () => {
        setCar(previousState => {
            return{...previousState, color: 'blue'}
        });
    }


    return <>
    <h1>My car is a {Car.brand}</h1>
    <p>
        It is a {Car.model} {Car.color} in color from {Car.year}
    </p>
    <button
    type="button"
    onClick={updateColor}
    >
        Blue
    </button>
    </>
}