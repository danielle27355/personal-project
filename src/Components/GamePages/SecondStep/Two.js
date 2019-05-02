import React, { Component } from "react";
import "./Two.css";

class Two extends Component {
  render() {
    return (
      <div className="Two">  
        <h3>  
            This is the second decision to make
        </h3>

        <button><a href="#/4">Do the thing</a></button>
        <button><a href="#/5">Do the other thing</a></button>

      </div>
    );
  }
}

export default Two;