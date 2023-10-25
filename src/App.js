import logo from './logo.svg';
import './App.css';
import React from 'react';

class Item extends React.Component{
  render(){
    return(
      <h1>Heck, yeah i breathe you!</h1>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOD IS GOOD
        </a>
      </header>
    </div>
  );
}

export default App;
