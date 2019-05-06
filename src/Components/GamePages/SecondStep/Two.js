import React, { Component } from "react";
import "./Two.css";
import axios from "axios";

class Two extends Component {
  updatePathway = (e) => {
    console.log("2: e.target.value: ",e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log("2: res.data", res.data);
      if(res.data[0].history.includes('2A')){
        // console.log("2: res.data: ", res.data)
        console.log("2: this includes: 2A");
        this.props.history.push("/4");
        console.log("did it work?");
      }
      else{
        console.log("2: this includes: 2B");
        this.props.history.push("/5");
      }
    })
  }


  render() {
    console.log(this.props);
    return (
      <div className="Two">  
        <h3>  
            This is the second decision to make
        </h3>

        {/* <button><a href="/4">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "2A">Do the thing</button>
        {/* <button><a href="/5">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "2B">Do the other thing</button>

      </div>
    );
  }
}

export default Two;