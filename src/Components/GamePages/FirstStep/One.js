import React, { Component } from "react";
import "./One.css";
import axios from "axios";

class One extends Component {
    saveHistory = (e) => {
      // let {history} = this.state;
      console.log(e.target.value);
      axios.put("/pathway", {choice: e.target.value}).then(res =>{
        console.log("1: ",res.data);
        // console.log("1: this.props.history: ",this.props.history);
        //this.props.history.push();
        if(res.data[0].history.includes('1A')){
          this.props.history.push("/2");
        }
        else{
          this.props.history.push("/3");
        }
      })
    }

  render() {
    console.log("1: this.props: ",this.props);
    return (
      <div className="One">  
        <h3> 
            This is the first decision to make
        </h3>

        {/* <a href="#/2"></a> */}
        <button onClick = {this.saveHistory} value = "1A" >Do the thing</button>
        {/* <button><a href="/2">Next</a></button> */}
        {/* <a href="#/3"></a> */}
        <button onClick = {this.saveHistory} value = "1B">Do the other thing</button>

      </div>
    );
  }
}

export default One;