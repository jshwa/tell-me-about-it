import React, { Component } from 'react';
import './Posts.css';
import { Link } from 'react-router-dom';

class DraftPosts extends Component {
   render() {
      return (
         <ul className="Github-posts">
            {this.props.posts.map(post => <Link to={`/drafts/${post.id}`}>
                  <li key={post.id} data-id={post.id}>{post.title}</li>
               </Link>)}
         </ul>
      )
   }
}

export default DraftPosts