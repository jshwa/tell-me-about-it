import React, {Component} from 'react';
import PostEditor from '../components/PostEditor';
import { Link } from 'react-router-dom';
import { setCurrentDraft, loadDraftPost } from '../actions/Drafts';
import { displayPublishedPost } from '../actions/Posts';
import './Drafter.css';
import isEmpty  from 'lodash/isEmpty';
import { connect } from 'react-redux';

class Drafter extends Component {
   componentDidMount() {
      if ( !isEmpty(this.props.match.params) && this.props.match.path === "/drafts/:id") {
         const id = this.props.match.params.id;
         this.props.setCurrentDraft({id: id, isSaved: true})
         fetch(`http://localhost:3001/api/posts/${id}?token=${this.props.token}`)
         .then(resp => resp.json())
         .then(post => this.props.loadDraftPost(post.draft_json))
      } 

      if ( !isEmpty(this.props.match.params) && this.props.match.path === "/posts/:id") {
         const id = this.props.match.params.id;
         this.props.setCurrentDraft({id: id, isSaved: true});
         this.props.displayPublishedPost(this.props.posts[id]);
      }
   }

   render() {
      return (
         <div className="Drafter-container">
            <PostEditor />
            <div className="backButtons">
               <Link to="/drafts"><button className="back-button">Back to Drafts</button></Link>
               <Link to="/posts"><button className="back-button">Back to Posts</button></Link>
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   token: state.userData.token, 
   posts: state.posts.posts
})

export default connect(mapStateToProps, { setCurrentDraft, loadDraftPost, displayPublishedPost })(Drafter)