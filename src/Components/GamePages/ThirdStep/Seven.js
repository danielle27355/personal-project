import React, { Component } from "react";
// import "./Seven.css";
import axios from "axios";

class Seven extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('7A')){
        this.props.history.push("/14");
      }
      else{
        this.props.history.push("/15");
      }
    })
  }

  render() {
    console.log("3: this.props: ", this.props);
    return (
      <div className="Seven">  
        <h3>  
            This is the third decision to make
        </h3>

        <button onClick = {this.updatePathway} value = "7A">Do the thing</button>
        {/* <button><a href="/14">Do the thing</a></button> */}
        {/* <button><a href="/15">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "7B">Do the other thing</button>

      </div>
    );
  }
}

export default Seven;