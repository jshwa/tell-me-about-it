import React, { Component } from 'react';
import Editor from '../components/Editor'
import './Drafter.css';

class Drafter extends Component {
   render(){
      return (
         <div className="Drafter-container">
            <Editor />
         </div>
      )
   }
}

export default Drafter