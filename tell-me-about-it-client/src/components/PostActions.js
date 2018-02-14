import React, { Component } from 'react';
import moment from 'moment';
import { convertToRaw } from 'draft-js';
import { connect } from 'react-redux';
import { setCurrentDraft } from '../actions/Drafts';
import { draftToMarkdown } from 'markdown-draft-js';


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
      const rawDraft = convertToRaw(this.props.editorState.getCurrentContent());
      const encodedMarkdown = btoa(window.unescape(encodeURIComponent(draftToMarkdown(rawDraft))));
      const login = this.props.userData.login;
      const title = rawDraft.blocks[0].text.toLowerCase().replace(/\s/g, "_");
      const date = moment().format("YYYY-MM-DD");
      fetch(`https://api.github.com/repos/${login}/${login}.github.io/contents/_posts/${date}-${title}.markdown`, {
         method: 'PUT',
         headers: {"Authorization": `Bearer ${this.props.userData.oauth}`},
         body: JSON.stringify({"message": `Publishing Post - ${rawDraft.blocks[0].text}`, "content": `${encodedMarkdown}`})
      })
      .then(resp => resp.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log(response))
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