import React from 'react';
import './App.css';

function Welcome() {
  return(
    <div className="App">
      <div className="App-container">
        <h1>Welcome!</h1>
            <img className="left-beer" src={require('./beer_emoji.png')} />

            <img src={require('./beer_emoji.png')} />

      </div>
    </div>
  )
}

export default Welcome;
