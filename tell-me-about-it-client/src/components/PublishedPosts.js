import React from 'react';

const PublishedPosts = ({ posts }) => (
    <ul className="Github-posts">
        {posts.map(post => <li>{post.title}</li>)}
    </ul>
)

export default PublishedPosts