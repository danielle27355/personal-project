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
            Hello and Welcome to Kitten Annihilation: Don't Let the Kitties Annihilate you! 
        </h2>   
        <h3>  
            You are a human and on your way to get a wonderful Chocolate Catpuccino from Kitties and Coffee. You arrive to the cafe on what appears to be nothing but an average day. While sipping on your coffee, you scroll through kitty pictures on your Instagram feed. Suddenly you feel a sharp pain on your toes and you look down. It is a kitty biting your toes!!!
        </h3>

        <button><a href="/1">Next</a></button>

      </div>
    );
  }

}

export default Start;