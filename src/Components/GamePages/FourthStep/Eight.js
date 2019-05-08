import React, { Component } from "react";
import axios from "axios";


class Eight extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist/finished", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('8A')){
        this.props.history.push("/winner");
      }
      else{
        this.props.history.push("/loser");
      }
    })
  }

  render() {
    console.log("8: this.props: ", this.props);
    return (
      <div className="Eight">  
        <h3>  
            Of course you could not help yourself and you just HAD to rub the kitten belly. I understand that and I would do the same thing. To my surprise the kitty actually seems to be enjoying this a lot. Wow...that kitty really likes it. The kitty is purring up a storm and wriggling around, almost too much. Oops! Looks like you rubbed the belly one rub too long. You pissed of the kitty and not he enters evil kitty mode. His fellow kitten minions come to join in on the action. Do you curl in a ball and let the kitties do what they want? Or do you say mean things to the kitties?
            (Fourth)
        </h3>

        {/* <button><a href="/winner">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "8A">Submit to the kitties</button>
        {/* <button><a href="/loser">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "8B">Say mean things to the kitties</button>

      </div>
    );
  }
}

export default Eight;