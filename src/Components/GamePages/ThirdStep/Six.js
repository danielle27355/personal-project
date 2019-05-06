import React, { Component } from "react";
// import "./Six.css";
import axios from "axios";

class Six extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('6A')){
        this.props.history.push("/12");
      }
      else{
        this.props.history.push("/13");
      }
    })
  }

  render() {
    console.log("6: this.props: ", this.props);
    return (
      <div className="Six">  
        <h3>  
            This is the third decision to make
        </h3>

        {/* <button><a href="/12">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "6A">Do the thing</button>
        {/* <button><a href="/13">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "6B">Do the other thing</button>

      </div>
    );
  }
}

export default Six;