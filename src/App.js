import React, { Component } from 'react';
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
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7bde324035bb80c753844bf562573669&user_id=186963498%40N05&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      alert(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {
        
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <div  className='box-img'>
          <img  className='imgStyle' alt="imgs" src={srcPath}></img>
          </div>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  render() {
    return (
      <div className="App">
       <header className='title-header'>
         <h2>Teste flickr</h2>
       </header>
        <p className="App-intro">
          {this.state.pictures}
        </p>
      </div>
    );
  }
}

export default App;
