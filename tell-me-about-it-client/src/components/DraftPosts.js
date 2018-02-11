import React from 'react';
import './Posts.css'

const DraftPosts = ({ posts }) => (
    <ul className="Github-posts">
        {posts.map(post => <li>{post.title}</li>)}
    </ul>
)

export default DraftPosts