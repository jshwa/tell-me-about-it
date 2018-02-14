import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDraft } from '../actions/Drafts'

class PostItem extends React.Component {
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

   addLike = () => {
      const likes = JSON.stringify({likes: this.props.post.likes +1})
      fetch(`http://localhost:3001/api/posts/${this.props.post.id}?token=${this.props.token}`, {
         method: 'PATCH',
         headers: {"Content-Type": "application/json"},
         body: likes}
      )
      .then(response => response.json())
      .then(draft => this.props.addDraft(draft))
   }

   render(){
      const { post } = this.props

      return (
         <li key={post.id} data-id={post.id}>
            <Link to={`/drafts/${post.id}`}>{post.title}</Link>
            <button className="like" onClick={this.addLike}>Like</button>
            <button className="like" onClick={this.api}>Call API</button>
            {post.likes}
         </li>
      )
   }
}

const mapStateToProps = state => ({
   token: state.userData.token
})

export default connect(mapStateToProps, { addDraft })(PostItem)