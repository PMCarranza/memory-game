import React from "react";
// importing the style.css document that goes with this file
import "./style.css";

// this component will handle the onClick event and it will render the images to the dom
// const Cards is being difined as a function props
const Cards = props => (
    <div className="card" onClick={() => props.clickedImage(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
            <div className="overlay">
            </div>
        </div>
    </div>
);

export default Cards;