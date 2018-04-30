import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import PublishedPosts from '../components/PublishedPosts';
import DraftPosts from '../components/DraftPosts';
import { getPublishedPosts, resetPosts } from '../actions/Posts';
import { getDraftPosts, resetDrafts } from '../actions/Drafts';
import './Hub.css';

class Hub extends Component {

   componentDidMount(){
      this.props.resetPosts();
      this.props.resetDrafts();
      this.props.getPublishedPosts(this.props.userData.login);
      this.props.getDraftPosts(this.props.userData.token);
   }

   render() {
      let tab = null;
      let postActive = null;
      let draftActive = null;
      switch (this.props.location.pathname) {
         case "/posts":
            tab = <PublishedPosts posts={this.props.posts.posts} />
            draftActive = "inactive"
            break;
         case "/drafts":
            tab = <DraftPosts posts={this.props.posts.drafts} /> 
            postActive = "inactive"
            break;
         default:
            tab = <Redirect to='/' /> 
      }
      return (
         <div className="Hub-container">
               <ul className="Hub-nav" >
                  <li className={postActive}><Link to="/posts">Posts</Link></li>
                  <li className={draftActive}><Link to="/drafts">Drafts</Link></li>
               </ul>
               {tab}
         </div>
        )
    }
}

const mapStateToProps = state => ({
      userData: state.userData,
      posts: state.posts
})

export default withRouter(connect(mapStateToProps, { getPublishedPosts, getDraftPosts, resetPosts, resetDrafts })(Hub))
