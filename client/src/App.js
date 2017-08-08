import React, { Component } from 'react';
import {Join} from './screens/join.js';
import {getGameState} from './gamestate.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let gameState = getGameState();
    gameState.phase = "JOIN";
    switch (gameState.phase) {
      case "JOIN":
        return <Join props={gameState} />
      case "CLUES":
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        );
      case "WAIT":
        return (
          <div>
            <p>
              This is waiting for game to start
            </p>
          </div>
        );
      case "PLAY":
        return (
          <div>
            <p>
              This is the join state
            </p>
          </div>
        );

    }
  }
}

export default App;
