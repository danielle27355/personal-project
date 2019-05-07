import React, { Component } from "react";
import axios from "axios";
// import "./Pathway.css";

class Pathway extends Component {
  constructor(){
    super();
    this.state = {
      history: []
    }
  }

  getHistory(){
    axios.get("/pathwaylist").then(res => {
      console.log(res.data);
      this.setState({history: res.data})
    })
  }
  deleteHistory(id){
    console.log("this is the deleteHistory method")
    axios.delete(`/pathwaylist${id}`).then(res => {
      console.log("pathway: deleteHistory: res.data ", res.data);
      this.setState({history: res.data})
    })
  }

  componentDidMount(){
    this.getHistory()
  }

  render() {
    console.log("this.state: ", this.state)
      let {history} = this.state;
      let mappedHistory = history.map(theHistory =>{
        console.log("theHistory: ", theHistory)
      return(
        <div key={theHistory.user_id}>
          <h4>History: {theHistory.history}</h4>
          <button onClick={() => this.deleteHistory(theHistory.id)}>Delete a game </button>
        </div>
      )
    })
    return (
      <div className="Pathway">  
        <h3>  
            This is the path you took in your game
        </h3>
        <div className = "mappedHistory">
          {mappedHistory}
        </div>

        <button><a href="/">Go home!</a></button>
        {/* <button><a href="#/history">View game history</a></button> */}

      </div>
    );
  }
}

export default Pathway;