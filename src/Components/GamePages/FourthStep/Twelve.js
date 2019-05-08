import React, { Component } from "react";
// import "./Twelve.css";
import axios from "axios";

class Twelve extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('12A')){
        this.props.history.push("/loser");
      }
      else{
        this.props.history.push("/winner");
      }
    })
  }

  render() {
    console.log("12: this.props: ", this.props);
    return (
      <div className="Twelve">  
        <h3>  
        Of course you could not help yourself and you just HAD to rub the kitten belly. I understand that and I would do the same thing. To my surprise the kitty actually seems to be enjoying this a lot. Wow...that kitty really likes it. The kitty is purring up a storm and wriggling around, almost too much. Oops! Looks like you rubbed the belly one rub too long. You pissed of the kitty and not he enters evil kitty mode. His fellow kitten minions come to join in on the action. Do you curl in a ball and let the kitties do what they want? Or do you say mean things to the kitties?
            (Fourth)
        </h3>

        {/* <button><a href="/loser">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "12A">Do the thing</button>
        {/* <button><a href="/winner">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "12B">Do the other thing</button>

      </div>
    );
  }
}

export default Twelve;