import React, { Component } from 'react';
import PostEditor from '../components/PostEditor'
import './Drafter.css';

class Drafter extends Component {
   render(){
      return (
         <div className="Drafter-container">
            <PostEditor />
         </div>
      )
   }
}

export default Drafter