import React, { Component } from "react";

// imports array of objects with images, names and ids
import deities from "./pics.json";
// imports components to be used to render the data
import Scoreboard from "./components/Scoreboard";
import Picture from "./components/PictureCard";

// responding to the onClick in PictureCard/index.js component the following randomly generates the images to display
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    // the random number generated is passed to an array and that determines the postion of selected image
    [array[i], array[j]] = [array[j], array[i]];
    // console.log('this is i - - > ',i, 'this is j - - > ', j);
  }
  // returns image id, image path and image name, this is an array of objects
  // console.log('array - - > ', array);
  return array;
}


// app is being defined as a class

class App extends Component {
  // object state is created containin a list of key value pairs
  state = {
    deities,
    score: 0,
    topScore: 0,
    alreadyClicked: 0,
    showSuccess: 0,
    clickedDeities: []
  };

  clickedImage = id => {
    // keeps track of the images clicked and pushes them into the clickedDeities array
    var clickedDeities = this.state.clickedDeities;
    // console.log('clicked Deities - - >', clickedDeities)
    // updates score
    var score = this.state.score;
    var topScore = this.state.topScore;
    this.setState({
      alreadyClicked: 0
    });

    // if the clicked image has an id of the indexed deities
    if (clickedDeities.indexOf(id) === -1) {
      // push that id of the clicked image into the array to be stored
      clickedDeities.push(id);
      // console.log(clickedDeities);
      // run the score function, scores increments by one every time an unclicked image is clicked
      this.updateScore();

      // run reshuffle function after each click
      this.reShuffle();

      // if all the images have been clicked w/o repeating
    } else if (this.state.score === 12) {
      // if user wins display message
      // reset score counter to 0 and empty the array containing the clicked images data
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedDeities: []
      });
    } else {
       // if user clicks an image a second time, reset score counter to 0, empty array
      this.setState({
        score: 0,
        clickedDeities: []
      });
      // console.log("duplicate");
      // change state to alreadyclicked
      this.setState({
        alreadyClicked: 1
      });
    }

// if score is greater than topScore change the state to the new high score
    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  // updateScore increases this.state.score by 1
  // directly related to Scoreboard componet index
  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle images function
  reShuffle = () => {
    this.setState({ deities: shuffle(deities) });
  };

  render() {
    return (
      <div className="container">
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.alreadyClicked }}
        >
          You should have been paying more attention, that was a double tap... click an image to start again.
          </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          Nicely done!
          </div>
        <Scoreboard
          // updates scores as they change
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="row">
          {/* .map() used to iterate over the content of deities and breaks the data into four key value pair pieces */}
          {this.state.deities.map(pic => (
            <Picture
              key={pic.id}
              id={pic.id}
              image={pic.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;