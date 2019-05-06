import React, { Component } from "react";
// import "./Ten.css";
import axios from "axios";

class Ten extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('10A')){
        this.props.history.push("/loser");
      }
      else{
        this.props.history.push("/loser");
      }
    })
  }

  render() {
    console.log("10: this.props: ", this.props);
    return (
      <div className="Ten">  
        <h3>  
            This is the fourth decision to make
        </h3>

        {/* <button><a href="/loser">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "10A">Do the thing</button>
        {/* <button><a href="/loser">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "10B">Do the other thing</button>

      </div>
    );
  }
}

export default Ten;