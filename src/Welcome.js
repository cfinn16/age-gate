import React from 'react';
import './App.css';

function Welcome() {
  return(
    <div className="App">
      <div className="App-container">
        <h1>Welcome!</h1>
        <div className="image-container">
            <img alt="glass of beer" className="left-beer" src={require('./beer_emoji.png')} />
            <img alt="glass of beer" src={require('./beer_emoji.png')} />
        </div>
      </div>
    </div>
  )
}

export default Welcome;
