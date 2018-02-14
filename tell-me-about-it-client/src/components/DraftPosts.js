import React from 'react';
import './Posts.css';
import PostItem from './PostItem';

const DraftPosts = ({posts}) => (
   <ul className="Github-posts">
      {posts.map(post => 
            <PostItem post={post}/>
         )}
   </ul>
)

export default DraftPosts