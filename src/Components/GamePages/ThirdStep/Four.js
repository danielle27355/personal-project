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
            This is the third decision to make
        </h3>

        {/* <button><a href="/8">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "4A">Do the thing</button>
        {/* <button><a href="/9">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "4B">Do the other thing </button>

      </div>
    );
  }
}

export default Four;