import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDidMount(){
    alert(process.env.REACT_APP_API_KEY);
    fetch(' https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7bde324035bb80c753844bf562573669&user_id=186963498%40N05&format=json&nojsoncallback=1')
    .then((res) => {
      console.log(res);
      
    })
    
    
    }
    
    render() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.pictures}
        </p>
      </div>
    );
  }
}

export default App;
