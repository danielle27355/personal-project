import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
// import "./Donate.css";

export default class PayToWin extends Component {
  constructor(props){
    super(props)
    this.state = {
      paid: false,
      cellNumber: ""
    }
  }
  // token is created with limited cc information to protect user identity
  // token is charged and sent to Stripe
  // Stripe accepts or denies payment on token
  onToken = (token) => {
    console.log('onToken', token);
    axios.post('/stripe', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: token.id
    }).then(() => {
      console.log("paid")
      this.setState({
        paid: true
      })
    })
  }

  takeInfo = () => {
    console.log("takeInfo(): ");
    let {cellNumber} = this.state;
    axios.post('/phoneNumber', {cellNumber}).then(res => {
      console.log("res.data: ", res.data)
    })
  }

  render() {
    const {paid} = this.state;
    let {cellNumber} = this.state;
    console.log("cellNumber: ", cellNumber)
    return (
      <div>


        <div className="not_paid">
          <h1>
            Pay to win!
              <div>
                $10 to get yourself some cheat codes
              </div>
          </h1>
        </div>

        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_5C89utQysxzJFiHnnSpOBFIx00RiDyGxwg"
          />

        { paid && <div className="paid">
          <h1>Please enter your cell phone number to receive the cheatz</h1>
          <label>Phone number: </label>
          <input type = "text" 
            onChange = {event =>
              this.setState({
              cellNumber: event.target.value
              })}
          />
          <button onClick = {this.takeInfo}>Submit Number</button>
        </div>}





      </div>
    );
  }
}

