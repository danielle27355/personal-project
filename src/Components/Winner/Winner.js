import React, { Component } from "react";
// import "./Winner.css";

class Winner extends Component {
  render() {
    return (
      <div className="Winner">  
        <h3>  
            Congratulations on staying alive! You kept the kitties happy enough!
        </h3>

        <button><a href="#/">Go home!</a></button>
        {/* <button><a href="#/history">View game history</a></button> */}

      </div>
    );
  }
}

export default Winner;