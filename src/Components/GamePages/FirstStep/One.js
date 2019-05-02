import React, { Component } from "react";
import "./One.css";

class One extends Component {

    // constructor(){
    //     super();
    //     this.setState = {

    //     }

    // }
  render() {
    return (
      <div className="One">  
        <h3>  
            This is the first decision to make
        </h3>

        <button><a href="#/2">Do the thing</a></button>
        <button><a href="#/3">Do the other thing</a></button>

      </div>
    );
  }
}

export default One;