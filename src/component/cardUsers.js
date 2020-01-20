import React, { Component } from "react";
import { Card } from "antd";
import "./card.css"
import axios from "axios"
import { Link, Switch, Route} from 'react-router-dom'
import Posts from "./posts"
const { Meta } = Card;
export default class cardUsers extends Component {
  
  render() {
    return (
      <div className="card-flex">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
          <h1 className="card-first-name">{this.props.user.name[0]}</h1>
          }
        >
          <Meta title={this.props.user.name} description={this.props.user.phone} />
          <Link to="/posts/:id">
            <h2>posts</h2>
          </Link>
        </Card>
        
        
      </div>
    );
  }
}
