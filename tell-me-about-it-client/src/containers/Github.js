import React, { Component } from 'react';
import GithubLogin from '../components/GithubLogin'
import PublishedPosts from '../components/PublishedPosts'
import DraftPosts from '../components/DraftPosts'
import './Github.css'

let posts = [
    {title: "Oh My Json"},
    {title: "Enlightenment is the Worst"},
    {title: "Shipping Tracker: My Sinatra Project"}
]

let drafts = [
    {title: "My Final Project"},
    {title: "What's next"},
    {title: "How I became President"}
]

export default class Github extends Component {
    constructor(){
        super();
        this.state = {
            active: 'Sign In'
        }
    }

    handleOnClick = (event) => {
        this.setState({active: event.target.innerHTML})
    }

    render() {
        const active = this.state.active;

        let tab = null;
        switch (active) {
            case "Posts":
                tab = <PublishedPosts posts={posts} />
                break;
            case "Drafts":
                tab = <DraftPosts posts={drafts} /> 
                break;
            case "Sign In":
                tab = <GithubLogin />
                break;
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
