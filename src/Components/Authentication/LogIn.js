import React, { Component } from "react";
import axios from 'axios';
import "./LogIn.css";
// connecting to the store
import {connect} from "react-redux";
import {setUser} from "../../ducks/reducer"



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
            // fire setUser function from this.props passing in our user, represented by res.data
            this.props.setUser(res.data) 
          })
    }

  render() {
    console.log("global state: ", this.props);
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
        <p>{this.props.user.username}</p>
        <div><button onClick = {this.login}>Log In</button></div>
        <div><button><a href="/character">Create a character</a></button></div>

      </div>

      
    );
  }
}


// connecting to the store - mapStateToProps and mapDispatchToProps
let mapStateToProps = state => {
  // console.log(state);
  return {
    user: state.user
  }
}

let mapDispatchToProps = {
  setUser
}

// connecting to the store - wrap connect around the component

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);