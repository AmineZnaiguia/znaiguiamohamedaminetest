import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Card from "./component/cardUsers";
import Posts from "./component/posts"
import axios from "axios";
export default class App extends Component {
  state = {
    usertab: []
  };
  componentDidMount = () => {
    this.getAllUsers();
  };
  getAllUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ usertab: res.data }));
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            render={() => (
              <div className="card-flex">
                {this.state.usertab.map(el => (
                  <Card  user={el} />
                ))}
              </div>
            )}
          />
          <Route path="/posts/:id"
        render={(props)=> <Posts id={props.match.params.id} />} />

        </Switch>
      </div>
    );
  }
}
