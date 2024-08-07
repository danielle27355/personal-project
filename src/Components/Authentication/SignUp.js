import React, { Component } from "react";
import axios from 'axios';
// import "./SignUp.css";

// connecting to the store
import {connect} from "react-redux";
import {setUser} from '../../ducks/reducer';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      fullName: "",
      email: "",
      userName: "",
      password: ""
    }
    this.signup = this.signup.bind(this);
  }

  signup(){
    let {fullName, email, userName, password} = this.state;
    axios.post("/auth/signup", {fullName, email, userName, password}).then(res => {
      console.log(res.data);
      this.props.setUser(res.data);
    }) 
  }


  render() {
    console.log("global state: ", this.props);
    return (
      <div className="SignUp">
        <h1></h1>
        <h3>Already have a username? Log in here: <button><a href="/login">Log in here:</a></button></h3>
    
        <h3>Sign up here:</h3>
        <div>
          <label>Full Name: </label>
          <input 
                type = "text"
                onChange = {event =>
                    this.setState({
                        fullName: event.target.value
                    })}
                />
        <div>
          <label>Email Address: </label>
          <input 
                type = "text"
                onChange = {event =>
                    this.setState({
                        email: event.target.value
                    })}
                />
          </div>
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
          <div>
          <label>Password: </label>
          <input 
                type = "text"
                onChange = {event =>
                    this.setState({
                        password: event.target.value
                    })}
                />
          </div>

        </div>
        <p>{this.props.user.username}</p>
        <div><button onClick = {this.signup}>Sign Up</button></div>
        <div><button><a href="/character">Create a character</a></button></div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.user
  }
}

let mapDispactchToProps = {
  setUser
}
export default connect(mapStateToProps, mapDispactchToProps)(SignUp);