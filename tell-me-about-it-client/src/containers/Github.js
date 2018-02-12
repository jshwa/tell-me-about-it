import React, { Component } from 'react';
import { connect } from 'react-redux';
import GithubLogin from '../components/GithubLogin';
import PublishedPosts from '../components/PublishedPosts';
import DraftPosts from '../components/DraftPosts';
import { setTab, getPublishedPosts } from '../actions/Github';
import './Github.css';

let drafts = [
    {title: "My Final Project"},
    {title: "What's next"},
    {title: "How I became President"}
]

class Github extends Component {

   handleOnClick = (event) => {
      this.props.setTab(event.target.innerHTML)
   }

   render() {
        const active = this.props.github.tab;

        let tab = null;
        switch (active) {
            case "Posts":
                tab = <PublishedPosts posts={this.props.github.posts} />
                break;
            case "Drafts":
                tab = <DraftPosts posts={drafts} /> 
                break;
            case "Sign In":
                tab = <GithubLogin />
                break; 
            default :
               tab = <GithubLogin />
        }
        return (
            <div className="Github-container">
                <ul className="Github-nav" >
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
      github: state.github
	}
}

export default connect(mapStateToProps, { setTab, getPublishedPosts })(Github)
