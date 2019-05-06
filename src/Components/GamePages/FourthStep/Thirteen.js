import React, { Component } from "react";
// import "./Thirteen.css";
import axios from "axios";

class Thirteen extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('13A')){
        this.props.history.push("/winner");
      }
      else{
        this.props.history.push("/loser");
      }
    })
  }
  render() {
    console.log("13: this.props: ", this.props);
    return (
      <div className="Thirteen">  
        <h3>  
            This is the fourth decision to make
        </h3>

        <button onClick = {this.updatePathway} value = "13A">Do the thing</button>
        {/* <button><a href="/winner">Do the thing</a></button> */}
        {/* <button><a href="/loser">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "13B">Do the other thing</button>

      </div>
    );
  }
}

export default Thirteen;