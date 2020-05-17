import React from 'react';
//importing can be used as variables
import logo from './logo.svg';
import './App.css';

function App() {
  //render is the only required LIFECYCLE method, renders on browser
  //render() {

  //returns JSX
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  //}
}

export default App;
