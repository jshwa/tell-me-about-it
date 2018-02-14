import React from 'react';
import { Link } from 'react-router-dom';

const PublishedPosts = ({ posts }) => (
    <ul className="Github-posts">
        {posts.map((post, index) => <Link to={`/posts/${index}`}><li key={index}>{post.split("\"")[1]}</li></Link>)}
    </ul>
)

export default PublishedPosts