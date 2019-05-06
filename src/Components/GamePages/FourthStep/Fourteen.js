import React, { Component } from "react";
// import "./Fourteen.css";
import axios from "axios";

class Fourteen extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('14A')){
        this.props.history.push("/loser");
      }
      else{
        this.props.history.push("/winner");
      }
    })
  }
  render() {
    console.log("14: this.props: ", this.props);
    return (
      <div className="Fourteen">  
        <h3>  
            This is the fourth decision to make
        </h3>

        {/* <button><a href="/loser">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "14A">Do the thing</button>
        {/* <button><a href="/winner">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "14B">Do the other thing</button>

      </div>
    );
  }
}

export default Fourteen;