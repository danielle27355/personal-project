import React, { Component } from "react";
// import "./Five.css";
import axios from "axios";

class Five extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('5A')){
        this.props.history.push("/10");
      }
      else{
        this.props.history.push("/11");
      }
    })
  }

  render() {
    console.log("5: this.props: ", this.props);
    return (
      <div className="Five">  
        <h3>  
            This is the third decision to make
        </h3>

        {/* <button><a href="/10">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "5A">Do the thing</button>
        {/* <button><a href="/11">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "5B">Do the other thing</button>

      </div>
    );
  }
}

export default Five;