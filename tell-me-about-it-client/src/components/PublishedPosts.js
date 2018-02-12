import React from 'react';

const PublishedPosts = ({ posts }) => (
    <ul className="Github-posts">
        {posts.map((post, index) => <li key={index}>{post.split("\"")[1]}</li>)}
    </ul>
)

export default PublishedPosts