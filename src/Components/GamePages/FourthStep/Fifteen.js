import React, { Component } from "react";
// import "./Fifteen.css";
import axios from "axios";

class Fifteen extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('15A')){
        this.props.history.push("/winner");
      }
      else{
        this.props.history.push("/winner");
      }
    })
  }
  render() {
    console.log("15: this.props: ", this.props);
    return (
      <div className="Fifteen">  
        <h3>  
            This is the fourth decision to make
        </h3>

        {/* <button><a href="/winner">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "15A">Do the thing</button>
        
        {/* <button><a href="/winner">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "15B">Do the other thing</button>

      </div>
    );
  }
}

export default Fifteen;