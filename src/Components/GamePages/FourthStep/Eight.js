import React, { Component } from "react";
import axios from "axios";


class Eight extends Component {
  updatePathway = (e) => {
    console.log(e.target.value);
    axios.put("/pathwaylist/finished", {choice: e.target.value}).then(res =>{
      console.log(res.data);
      if(res.data[0].history.includes('8A')){
        this.props.history.push("/winner");
      }
      else{
        this.props.history.push("/loser");
      }
    })
  }

  render() {
    console.log("8: this.props: ", this.props);
    return (
      <div className="Eight">  
        <h3>  
            This is the fourth decision to make
        </h3>

        {/* <button><a href="/winner">Do the thing</a></button> */}
        <button onClick = {this.updatePathway} value = "8A">Do the thing</button>
        {/* <button><a href="/loser">Do the other thing</a></button> */}
        <button onClick = {this.updatePathway} value = "8B">Do the other thing</button>

      </div>
    );
  }
}

export default Eight;