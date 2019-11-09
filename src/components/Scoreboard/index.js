import React from "react";
import "./scoreboard.css";

// this component renders the current and highest score to the dom
// the simplest way to define a component is to write a JS function
// This function is a valid React component because it accepts a single “props” object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions. https://reactjs.org/docs/components-and-props.html#function-and-class-components
// elements are the building blocks of react applications, an element describes what is being seen on the screen, in the code below that will be the scores

function Scoreboard(props) {
    return (

        <header className="scoreB">
            <div className="row">
                <div className="col-md-6"><h6>High Score: {props.topScore}</h6></div>
                <div className="col-md-6"><h6>Current Score: {props.score}</h6></div>
            </div>
        </header>

    );
}
export default Scoreboard;