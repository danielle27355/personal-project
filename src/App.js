import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import routes from "./routes";
import './App.css';
import Home from './Components/Home/Home';
import CharacterForm from './Components/CharacterForm/CharacterForm';
import Nav from './Components/Nav/Nav';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardsArray: []
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
        <Nav />
        {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
