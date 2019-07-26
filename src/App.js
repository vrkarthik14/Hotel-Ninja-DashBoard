import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
import hotelData from "./hotel.json";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

Amplify.configure(awsconfig);

//style component
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    const db_ref = firebase.database().ref("hotels_bookings/HILTON CHENNAI");
    db_ref.on("value", snapshot => {
      this.setState({
        data: snapshot.val()
      });
      console.log(snapshot.val());
    });
  }

  render() {
    const classes = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>CehckIn</TableCell>
              <TableCell>CheckOut</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(this.state.data).map(key => (
              <TableRow>
                <TableCell>{this.state.data[key]["name"]}</TableCell>
                <TableCell>{this.state.data[key]["checkIn"]}</TableCell>
                <TableCell>{this.state.data[key]["checkOut"]}</TableCell>
                <TableCell>{this.state.data[key]["count"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withAuthenticator(withStyles(useStyles)(App), true);
