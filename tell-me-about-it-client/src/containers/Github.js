import React, { Component } from 'react';
import GithubLogin from '../components/GithubLogin'
import PublishedPosts from '../components/PublishedPosts'
import DraftPosts from '../components/DraftPosts'

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
            <div>
                <GithubLogin />
                <PublishedPosts posts={posts} />
                <DraftPosts posts={drafts} /> 
            </div>
        )
    }
}
