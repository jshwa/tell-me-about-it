import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDraftPost, setCurrentDraft } from '../actions/Drafts';
import { convertFromRaw } from 'draft-js';
import './Posts.css';

class DraftPosts extends Component {
   getPost = (event) => {
      const id = event.target.dataset.id
      this.props.setCurrentDraft({id: id, isSaved: true})
      fetch(`http://localhost:3001/api/posts/${id}?token=${this.props.token}`)
      .then(resp => resp.json())
      .then(post => this.props.loadDraftPost(post.draft_json))
   
   }

   render() {
      return (
         <ul className="Github-posts">
            {this.props.posts.map(post => <li key={post.id} data-id={post.id} onClick={this.getPost}>{post.title}</li>)}
         </ul>
      )
   }
}

const mapStateToProps = state => {
   return {
      token: state.userData.token
   }
}

export default connect(mapStateToProps, { loadDraftPost, setCurrentDraft })(DraftPosts)