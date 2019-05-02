import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to Stay Alive!1!!</h1>
        {/* <div><button><a href="#/character">Play Game</a></button></div> */}
        <div><button><a href="#/signup">Sign Up</a></button></div>   
        <div><button><a href="#/kitties">View Kitty Pictures</a></button></div>   
        <div><button><a href="#/donate">Donate</a></button></div>
        
        
      </div>
    );
  }
}

export default Home;