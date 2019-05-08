import React, { Component } from "react";
import "./Loser.css";
const grimReaperJosh = require("./grim-reaper-josh.png");


class Loser extends Component {
  render() {
    return (
      <div className="Loser">  
        <h3>  
            I am sorry, you are a loser and the kitties decide to eat you. It is time to face the wrath of Grim Reaper Josh: Lord of the Kitties.
        </h3>
        <img src={grimReaperJosh} />
        <div>
        <button><a href="/">Go home!</a></button>
        <button><a href="/pathway">View game history</a></button>
        </div>

      </div>
    );
  }
}

export default Loser;