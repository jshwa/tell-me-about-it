import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/Users';
import { Redirect } from 'react-router-dom';
import { getPublishedPosts } from '../actions/Posts';
import { getDraftPosts } from '../actions/Drafts';

class Users extends Component {
   componentWillMount() {
      const params = this.getQueryParams();
      this.props.loginUser(params);
   }

   getQueryParams() {
      const query = window.location.search.substring(1);
      const params = query.split('&').map((str) => str.split('='));
      return params.reduce((memo, pair) => {
        memo[pair[0]] = pair[1];
        return memo;
      }, {});
    }

   render() {
      return (
         <Redirect to="/" />
      )
   }
}

export default connect (null, { loginUser, getPublishedPosts, getDraftPosts })(Users)