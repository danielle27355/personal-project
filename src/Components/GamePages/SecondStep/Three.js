import React, { Component } from "react";
import "./Three.css";
import axios from "axios";

class Three extends Component { 
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log("3: res.data", res.data);
      if(res.data[0].history.includes('3A')){
        // console.log("2: res.data: ", res.data)
        console.log("3: this includes: 3A");
        this.props.history.push("/6");
        console.log("did it work?");
      } 
      else{
        console.log("3: this includes: 3B");
        this.props.history.push("/7");
      }
    })
  }

  render() {
    console.log("3: this.props: ", this.props);
    return (
      <div className="Three">  
        <h3>  
          You decided to shoe the kitty away and that made him very, very angry. This little kitty hops up onto the table and pees into your coffee. You're not too angry about this incident, but you are a little sad. You either decide that you will try to make the kitty happy by giving him some treats or you will just cry like the big baby everyone knows you are. 
          
          What do you want to do?
          (Second)
          
        </h3>

        {/* <button><a href="/6">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "3A">Do the thing</button>
        {/* <button><a href="/7">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "3B">Do the other thing</button>

      </div>
    );
  }
}

export default Three;