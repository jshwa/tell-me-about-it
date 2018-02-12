import React, { Component } from 'react';

class PostEditor extends Component {
   render(){
      return (
         <form>
            <textarea className="Editor" style={{display:'none'}}/>
         </form>
      )
   }
}

export default PostEditor