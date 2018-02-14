import React from 'react';
import { Link } from 'react-router-dom';

export default class PostItem extends React.Component {
   constructor() {
      super();
      this.state = {
         likes: 0
      }
      this.addLikes= this.addLikes.bind(this)
   }

   addLikes() {
      this.setState({
         likes: this.state.likes + 1
      })
   }

   api = () => {
      console.log('a')
      fetch(`http://localhost:3001/api/posts?token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJzdWIiOjMyNzE3NzI0fQ.hw5Kr0NuDl1qb7xTuLfz1iGuFGkNngr6A-Y7DBSDfxs`)
      .then(response => {
         console.log('b');
         return response.json()})
      .then(drafts => 
         console.log('c', drafts))
      .catch(e => console.log('d', e))
      console.log('e')
      //a, b, d, c, e
      }

   render(){
      const { post } = this.props

      return (
         <li key={post.id} data-id={post.id}>
            <Link to={`/drafts/${post.id}`}>{post.title}</Link>
            <button className="like" onClick={this.addLikes}>Like</button>
            <button className="like" onClick={this.api}>Call API</button>
            {this.state.likes}
         </li>
      )
   }
}