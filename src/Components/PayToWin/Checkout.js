import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import "./PayToWin";

export default class Checkout extends React.Component {
    onToken = ""
  
    render() {
      return (
        <StripeCheckout
          name = "TEST"
          amount="1000"
          billingAddress
          description="Awesome Product"
          // image="https://yourdomain.tld/images/logo.svg"
          locale="auto"
          name="YourDomain.tld"
          stripeKey="pk_test_5C89utQysxzJFiHnnSpOBFIx00RiDyGxwg"
          token={this.onToken}
          zipCode
        />
      )
    }
  }