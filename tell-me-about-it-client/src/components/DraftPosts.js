import React from 'react';

const DraftPosts = ({ posts }) => (
    <ul>
        {posts.map(post => <li>{post.title}</li>)}
    </ul>
)

export default DraftPosts