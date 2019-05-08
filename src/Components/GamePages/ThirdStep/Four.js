import React, { Component } from "react";
// import "./Four.css";
import axios from "axios";

class Four extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('4A')){
        this.props.history.push("/8");
      }
      else{
        this.props.history.push("/9");
      }
    })
  }

  render() {
    console.log("4: this.props: ", this.props);
    return (
      <div className="Four">  
        <h3>  
            You decide to feed the kitty a treat, even though the kitty was mostly just trying to be mean to you and assert his dominance. The kitten leaps on the treat and devours it like his life depends on it. After eating the treat, the kitty starts purring and lays down, with his cute little kitten belly exposed. Do you take the bait and pet the belly? Or do you decide that it's just a trap and it's best to walk away and let the kitty be?
            (Third)
        </h3>

        {/* <button><a href="/8">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "4A">Pet the belly</button>
        {/* <button><a href="/9">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "4B">Leave the kitty alone</button>

      </div>
    );
  }
}

export default Four;