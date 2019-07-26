import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
import hotelData from "./hotel.json";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    const db_ref = firebase.database().ref("hotels_bookings/HILTON CHENNAI");
    db_ref.on("value", snapshot => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  render() {
    return <div>Hello</div>;
  }
}

export default withAuthenticator(App, true);
