import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PublishedPosts from '../components/PublishedPosts';
import DraftPosts from '../components/DraftPosts';
import { getPublishedPosts } from '../actions/Posts';
import { getDraftPosts } from '../actions/Drafts';
import './Hub.css';

class Hub extends Component {

   componentDidMount(){
      if (this.props.posts.posts.length === 0) {
         this.props.getPublishedPosts(this.props.userData.login);
      }
      if (this.props.posts.drafts.length === 0) {
         this.props.getDraftPosts(this.props.userData.token);
      }
   }

   render() {
      let tab = null;
      switch (this.props.location.pathname) {
         case "/posts":
            tab = <PublishedPosts posts={this.props.posts.posts} />
            break;
         case "/drafts":
            tab = <DraftPosts posts={this.props.posts.drafts} /> 
            break;
         default:
            tab = <Redirect to='/' /> 
      }
      return (
         <div className="Hub-container">
               <ul className="Hub-nav" >
                  <li><Link to="/posts">Posts</Link></li>
                  <li><Link to="/drafts">Drafts</Link></li>
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

export default connect(mapStateToProps, { getPublishedPosts, getDraftPosts })(Hub)
