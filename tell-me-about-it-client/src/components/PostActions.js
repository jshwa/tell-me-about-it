import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { connect } from 'react-redux';
import { setCurrentDraft } from '../actions/Drafts'

class PostActions extends Component {
   saveOrUpdateDraft = () => {
      const rawDraft = convertToRaw(this.props.editorState.getCurrentContent());
      const draft = JSON.stringify({ post: {
         title: rawDraft.blocks[0].text,
         draft_json: rawDraft
         }
      })

      if (this.props.currentDraft.isSaved === true) {
         fetch(`http://localhost:3001/api/posts/${this.props.currentDraft.id}?token=${this.props.userData.token}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: draft})
         .then(res => res.json())
         .catch(error => console.error('Error:', error))
         .then(response => {
            console.log('Success:', response);
         })
      } else {
         fetch(`http://localhost:3001/api/posts?token=${this.props.userData.token}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: draft})
         .then(res => res.json())
         .catch(error => console.error('Error:', error))
         .then(response => {
            console.log('Success:', response);
            this.props.setCurrentDraft({id: response.id, isSaved: true});
         })
      }
   }

   postToGithub = () => {

   }

   render(){
      let saved = this.props.currentDraft.isSaved ? "Saved" : "Not Saved"
      return (
         <div>
            <span>{saved}</span>
            <button onClick={this.saveOrUpdateDraft}>Save Draft</button>
            <button onClick={this.postToGithub}>Post to Github</button>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      userData: state.userData,
      editorState: state.posts.editorState,
      currentDraft: state.posts.currentDraft
   }
}
export default connect(mapStateToProps, { setCurrentDraft })(PostActions)