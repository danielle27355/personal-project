import React, { Component } from "react";
import "./Start.css";

class Start extends Component {

    // constructor(){
    //     super();
    //     this.setState = {

    //     }

    // }
  render() {
    return (
      <div className="Start">
        <h2>
            Hello and welcome to Stay Alive. 
        </h2>   
        <h3>  
            You are a human and on your way to get a wonderful Chocolate Catpuccino from Kitties and Coffee. You arrive to the cafe on what appears to be nothing but an average day. 
        </h3>

        <button><a href="/1">Next</a></button>

      </div>
    );
  }

}

export default Start;