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
    render() {
        return (
            <div className="Github-container">
                <ul className="Github-nav" >
                    <li className="Github-nav-item">Posts</li>
                    <li className="Github-nav-item">Drafts</li>
                    <li className="Github-nav-item">Sign In</li>
                </ul>
                <GithubLogin />
                <PublishedPosts posts={posts} />
                <DraftPosts posts={drafts} /> 
            </div>
        )
    }
}
