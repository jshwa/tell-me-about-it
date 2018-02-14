import React from 'react';
import PostEditor from '../components/PostEditor';
import { Link } from 'react-router-dom';
import './Drafter.css';

export const Drafter = () => (
   <div className="Drafter-container">
      <PostEditor />
      <Link to="/drafts"><button>Back to Drafts</button></Link>
      <Link to="/posts"><button>Back to Posts</button></Link>
   </div>
)