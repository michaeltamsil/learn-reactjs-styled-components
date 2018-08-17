import React, { Component } from 'react';
import styled from 'styled-components' 
import logo from './logo.svg';
import './App.css';

class App extends Component {

  const Button = styled.button
    backgroundColor: #ff0000;
    width: 320px;
    padding: 20px;
    borderStatus: 5px;
    border: none;
    outline: none;
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
