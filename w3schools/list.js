import React from "react";
import ReactDOM from 'react-dom';

function Car(props) {
    return <li>I am {props.brand}</li>;
}

function Garage() {
    const cars = [
        {id: 1, brand: 'BMW'},
        {id: 2, brand: 'Audi'},
        {id: 3, brand: 'VW'},
    ];

    return <>
    <h1>Who lives in my garage</h1>
    <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand}/>)}
    </ul>
    </>
}