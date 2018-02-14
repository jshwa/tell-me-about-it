import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const LoggedInRoute = ({ component: Component, auth, ...rest}) => (
   <Route {...rest} render={ props => (
      auth ? <Component {...props} /> : <Redirect to = {{pathname: "/login"}} />
   )} /> 
)
