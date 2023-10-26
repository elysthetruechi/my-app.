import logo from './logo.svg';
import './App.css';
import React from 'react';

class Item extends React.Component{
constructor(props)
{
  super(props)

  this.state = {
    clicks:0
  }
}
  clickMe(){
    this.setState({
      clicks: this.state.clicks + 1
    })
    console.log("i was clicked")
  }
  render(){
    return(
      <div>
     {/*react click events and props*/} <h1 onClick={() => this.clickMe()}>Heck, yeah i breathe {this.props.name}
     </h1>
     <span>{this.state.clicks} is the number of clicks</span>
     </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item name="Elys"/>
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
