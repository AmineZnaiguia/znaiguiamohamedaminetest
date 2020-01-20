import React, { Component } from 'react'
import axios from "axios";
import Listpost from './listpost';

export default class posts extends Component {
​ 
 state = {
       posts: [],  
      }

      componentDidMount=()=>{this.getList()}
      getList = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts?postsId=" + this.props.id)
          .then(res => this.setState({ posts: res.data }))
          .catch(err => console.log("err"));
      };  
    render() {
        return (
            <div>
                  {this.state.posts.map(e =>
             <Listpost post={e}/>)}
            </div>
        )
    }
}
