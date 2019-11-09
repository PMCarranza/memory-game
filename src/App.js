import React, { Component } from "react";

// imports array of objects with images, names and ids
import deities from "./pics.json";
// imports components to be used to render the data
import Scoreboard from "./components/Scoreboard";
import Card from "./components/PictureCard";

// shuffle upon each click
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    deities,
    score: 0,
    topScore: 0,
    alreadyClicked: 0,
    showSuccess: 0,
    clickedDeities: []
  };

  clickedImage = id => {
    // assign the state of the empty array to a var to be updated
    var clickedDeities = this.state.clickedDeities;
    var score = this.state.score;
    var topScore = this.state.topScore;
    this.setState({
      alreadyClicked: 0
    });

    // if the clicked image has an id of the indexed deities
    if (clickedDeities.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedDeities.push(id);
      console.log(clickedDeities);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedDeities: []
      });
    } else {
       // alert player loss
      this.setState({
        score: 0,
        clickedDeities: []
      });
      console.log("duplicate");
      this.setState({
        alreadyClicked: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ deities: shuffle(deities) });
  };

  render() {
    return (
      <div className="container">
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.alreadyClicked }}
        >
          You clicked on this already, try again...
          </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          Nicely done!
          </div>
        <Scoreboard
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="row">
          {this.state.deities.map(pic => (
            <Card
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