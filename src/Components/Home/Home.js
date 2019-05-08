import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Home.css";
const angryKitty = require("./angry-catto-1.png");

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to Kitten Annihil@tion!1!!</h1>
        
        <div class="responsive">
          <img src={angryKitty} alt="angry-home-kitty" width="300"/>
          
        </div>
        <h3>Don't let the kitties annihil@te you!!11!</h3>
      
        <div><button><a href="/signup">Play game</a></button></div>   
        {/* <div><button><a href="/kitties">View dank cat memes</a></button></div>   
        <div><button><a href="/paytowin">PaY t0 w1n!!!</a></button></div>*/}
      </div>
    );
  }
}

export default Home;