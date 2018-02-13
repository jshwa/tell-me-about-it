import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import { connect } from 'react-redux';
import { saveEditorState } from '../actions/Drafts';
import '../../node_modules/draft-js/dist/Draft.css';
import './PostEditor.css';

class PostEditor extends Component {
   
   onChange = (editorState) => {
      this.props.saveEditorState(editorState)
   };

   saveDraft = () => {
      const rawDraft = convertToRaw(this.props.editorState.getCurrentContent());
   }

   toggleCode = () => {
      this.onChange(RichUtils.toggleCode(this.props.editorState));
   }

   render(){
      return (
         <div>
            <button onClick={this.toggleCode}>Code</button>
            <Editor editorState={this.props.editorState} onChange={this.onChange} />
            <button onClick={this.saveDraft} >Save</button>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      editorState: state.github.editorState
   }
}

export default connect(mapStateToProps, { saveEditorState })(PostEditor)