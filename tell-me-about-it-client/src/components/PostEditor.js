import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';
import { connect } from 'react-redux';
import { saveEditorState } from '../actions/Drafts'
import '../../node_modules/draft-js/dist/Draft.css';

class PostEditor extends Component {
   
   onChange = (editorState) => {
      this.props.saveEditorState(editorState)
   };

   render(){
      return (
         <Editor editorState={this.props.editorState} onChange={this.onChange} />
      )
   }
}

const mapStateToProps = state => {
   return {
      editorState: state.github.editorState
   }
}

export default connect(mapStateToProps, { saveEditorState })(PostEditor)