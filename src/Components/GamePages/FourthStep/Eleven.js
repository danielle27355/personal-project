import React, { Component } from "react";
// import "./Eleven.css";
import axios from "axios";

class Eleven extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('11A')){
        this.props.history.push("/loser");
      }
      else{
        this.props.history.push("/loser");
      }
    })
  }

  render() {
    console.log("11: this.props: ", this.props);
    return (
      <div className="Eleven">  
        <h3>  
            This is the fourth decision to make
        </h3>

        <button onClick = {this.updatePathway} value = "11A">Do the thing</button>
        {/* <button><a href="/loser">Do the thing</a></button> */}
        {/* <button><a href="/loser">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "11B">Do the other thing</button>

      </div>
    );
  }
}

export default Eleven;