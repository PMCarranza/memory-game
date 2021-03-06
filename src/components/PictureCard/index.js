import React from "react";
// importing the style.css document that goes with this file
import "./style.css";

// this component will handle the onClick event and it will render the images to the dom
// const Pictures is being difined as a function props, the onClick event triggers the clickedImage function defined in src -> app.js
const Pictures = props => (
    <div className="card" onClick={() => props.clickedImage(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
            <div className="overlay">
            </div>
        </div>
    </div>
);

// exports component to be used where needed
export default Pictures;