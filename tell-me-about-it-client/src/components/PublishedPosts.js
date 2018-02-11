import React from 'react';

const PublishedPosts = ({ posts }) => (
    <ul>
        {posts.map(post => <li>{post.title}</li>)}
    </ul>
)

export default PublishedPosts