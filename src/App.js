/*import logo from './logo.svg';*/
import './App.css';
import React from 'react';

/*class Item extends React.Component{
/* adding state to components constructor(props)
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
     {/*react click events and props <h1 onClick={() => this.clickMe()}>Heck, yeah i breathe {this.props.name}
     </h1>
     <span>{this.state.clicks} is the number of clicks</span>
     </div>
    )
  }
}*/
class StarWars extends React.Component{
  constructor()
{
super()
  this.state = {
    loadedCharacter:false,
    name:null,
    height:null,
    homeworld:null,
    films:[],

  }
}
  getNewCharacter(){
    const  randomNumber = Math.round(Math.random() *82)
   /* console.log("get new character from the button")*/
    const url =`https://swapi.dev/api/people/${randomNumber}/`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        name:data.name,
      height:data.height,
      homeworld:data.homeworld,
      films:[data.films],
      loadedCharacter:true
      })
      console.log(data)
    })
    
  }
  render(){
    return(
      <div>
        {
          this.state.loadedCharacter &&
          <div>
 <h1>{this.state.name}</h1>
        <h5>{this.state.height}cm</h5>
        <p><a href ={this.state.homeworld}>homeworld</a></p>
        <ul>
          <li>
          {this.state.films} 
          </li>
        </ul>
          </div>
        }
       
        <button type="button" 
        onClick={() => this.getNewCharacter()} 
        className="btn">randomize characters</button>
      </div>
      /*<hi>this is star wars</hi>*/
    )
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />

      </header>
    </div>
  );
}

export default App;
