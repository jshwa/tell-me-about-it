import React, { Component } from 'react';
import { connect } from 'react-redux';
import GithubLogin from '../components/GithubLogin';
import PublishedPosts from '../components/PublishedPosts';
import DraftPosts from '../components/DraftPosts';
import { setTab, getPublishedPosts } from '../actions/Posts';
import './Hub.css';

class Hub extends Component {

   componentWillMount(){
      if (this.props.userData) {
         this.props.setTab("Drafts")
      }
   }

   handleOnClick = (event) => {
      this.props.setTab(event.target.innerHTML)
   }

   render() {
        const active = this.props.posts.tab;

        let tab = null;
        switch (active) {
            case "Posts":
               tab = <PublishedPosts posts={this.props.posts.posts} />
               break;
            case "Drafts":
                tab = <DraftPosts posts={this.props.posts.drafts} /> 
                break;
            case "Sign In":
                tab = <GithubLogin />
                break; 
            default :
               tab = <GithubLogin />
        }
        return (
            <div className="Hub-container">
                <ul className="Hub-nav" >
                    <li onClick={event => this.handleOnClick(event)}>Posts</li>
                    <li onClick={event => this.handleOnClick(event)}>Drafts</li>
                    <li onClick={event => this.handleOnClick(event)}>Sign In</li>
                </ul>
                {tab}
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
      userData: state.userData,
      posts: state.posts
	}
}

export default connect(mapStateToProps, { setTab, getPublishedPosts })(Hub)
