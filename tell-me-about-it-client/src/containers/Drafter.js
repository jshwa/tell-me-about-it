import React, {Component} from 'react';
import PostEditor from '../components/PostEditor';
import { Link } from 'react-router-dom';
import { setCurrentDraft, loadDraftPost } from '../actions/Drafts';
import './Drafter.css';
import isEmpty  from 'lodash/isEmpty';
import { connect } from 'react-redux';

class Drafter extends Component {
   componentDidMount() {
      if ( !isEmpty(this.props.match.params) ) {
         const id = this.props.match.params.id;
         this.props.setCurrentDraft({id: id, isSaved: true})
         fetch(`http://localhost:3001/api/posts/${id}?token=${this.props.token}`)
         .then(resp => resp.json())
         .then(post => this.props.loadDraftPost(post.draft_json))
      }
   }

   render() {
      return (
         <div className="Drafter-container">
            <PostEditor />
            <Link to="/drafts"><button>Back to Drafts</button></Link>
            <Link to="/posts"><button>Back to Posts</button></Link>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   token: state.userData.token
})

export default connect(mapStateToProps, { setCurrentDraft, loadDraftPost })(Drafter)