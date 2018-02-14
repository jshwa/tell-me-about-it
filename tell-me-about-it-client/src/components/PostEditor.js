import React, { Component } from 'react';
import { Editor, RichUtils, getDefaultKeyBinding } from 'draft-js';
import { connect } from 'react-redux';
import { saveEditorState, setCurrentDraft } from '../actions/Drafts';
import { BlockStyleControls, InlineStyleControls } from './StyleControls';
import PostActions from './PostActions';
import '../../node_modules/draft-js/dist/Draft.css';
import './PostEditor.css';

class PostEditor extends Component {

   onChange = (editorState) => {
      this.props.saveEditorState(editorState)
   };

   focus = () => this.refs.editor.focus();

   handleKeyCommand = (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }

    mapKeyToEditorCommand = (e) => {
      if (e.keyCode === 9) {
          const newEditorState = RichUtils.onTab(
            e,
            this.props.editorState,
            4, /* maxDepth */
          );
          if (newEditorState !== this.props.editorState) {
            this.onChange(newEditorState);
          }
          return;
      }
      return getDefaultKeyBinding(e);
    }

    toggleBlockType = (blockType) => {
      this.onChange(
        RichUtils.toggleBlockType(
          this.props.editorState,
          blockType
        )
      );
    }
    
    toggleInlineStyle = (inlineStyle) => {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.props.editorState,
          inlineStyle
        )
      );
    }

    getBlockStyle = (block) => {
      switch (block.getType()) {
        case 'blockquote': return 'PostEditor-blockquote';
        default: return null;
      }
     }

   render(){
      const editorState = this.props.editorState;
      let className = 'PostEditor-editor';
      var contentState = this.props.editorState.getCurrentContent();
      if (!contentState.hasText()) {
         if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' PostEditor-hidePlaceholder';
         }
      }
      const styleMap = {
         CODE: {
           backgroundColor: 'rgba(0, 0, 0, 0.05)',
           fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
           fontSize: 16,
           padding: 2,
         },
        };
      return (
         <div>
            <div className="PostEditor-root">
               <BlockStyleControls
                  editorState={editorState}
                  onToggle={this.toggleBlockType}
               />
               <InlineStyleControls
                  editorState={editorState}
                  onToggle={this.toggleInlineStyle}
               />
               <div className={className} onClick={this.focus}>
                  <Editor
                  blockStyleFn={this.getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  keyBindingFn={this.mapKeyToEditorCommand}
                  onChange={this.onChange}
                  placeholder="Tell me about it..."
                  ref="editor"
                  spellCheck={true}
                  />
               </div>
            </div>
            <PostActions />
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

export default connect(mapStateToProps, { saveEditorState, setCurrentDraft })(PostEditor)