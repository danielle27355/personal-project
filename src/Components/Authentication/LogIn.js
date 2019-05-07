import React, { Component } from "react";
import axios from 'axios';
import "./LogIn.css";

class LogIn extends Component {
    constructor(){
      
        super();
        this.state = {
            userName: "",
            password: ""
        }
    this.login = this.login.bind(this);
    }

    login(){
        let {userName, password} = this.state;
        axios.post("/auth/login", {userName, password}).then(res => {
            console.log(res.data);
          })
    }

  render() {
    return (
      <div className="LogIn">
        <h2>Log in here: </h2>
        <div>
        <label>Username: </label>
          <input 
                type = "text"
                onChange = {event =>
                    this.setState({
                        userName: event.target.value
                    })}
                />
        </div>
        <label>Password: </label>
          <input 
                type = "text"
                onChange = {event =>
                    this.setState({
                        password: event.target.value
                    })}
                /> 

        <div><button onClick = {this.login}>Log In</button></div>
        <div><button><a href="/character">Create a character</a></button></div>

      </div>

      
    );
  }
}

export default LogIn;