import React, { Component } from "react";
// import "./Loser.css";

class Loser extends Component {
  render() {
    return (
      <div className="Loser">  
        <h3>  
            I am sorry, the kitties ate you. Better luck next time. 
        </h3>

        <button><a href="#/">Go home!</a></button>
        {/* <button><a href="#/history">View game history</a></button> */}

      </div>
    );
  }
}

export default Loser;