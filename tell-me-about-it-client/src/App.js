import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Clock from './components/Clock';
import Users from './components/Users';
import { GithubLogin } from './components/GithubLogin';
import Drafter from './containers/Drafter';
import Hub from './containers/Hub';
import { LoggedInRoute } from './containers/LoggedInRoute';
import { Prompt } from './components/Prompt';
import { clearState } from './localStorage';
import { setBg, addBg, logoutUser } from './actions/Users';

class App extends Component {
   componentDidMount(){
      const { bgImgs, setBgImg, loggedIn } = this.props.userData
      if (loggedIn && bgImgs.length === 0) {
         this.changeBackground();
      } else if (loggedIn &&
         document.getElementById('site-background').style.backgroundImage !== `url('${bgImgs[setBgImg]}')`){
         document.getElementById('site-background').style.backgroundImage = `url('${bgImgs[setBgImg]}')`;
      }
   }

   changeBackground = () => {
      const { bgImgs, setBgImg } = this.props.userData
      if (setBgImg === 0 || setBgImg == null) {
         fetch(process.env.REACT_APP_BACKGROUND_URL)
         .then(resp => resp.json())
         .then(img => {
            document.getElementById('site-background').style.backgroundImage = `url('${img.urls.full}')`;
            this.props.setBg({setBgImg: 0});
            this.props.addBg(img.urls.full);
         })
      } else {
         let next = setBgImg - 1
         document.getElementById('site-background').style.backgroundImage = `url('${bgImgs[next]}')`
         this.props.setBg({setBgImg: next});
      }
   }

   changeBackgroundBack = () => {
      const { bgImgs, setBgImg } = this.props.userData
      if (setBgImg < bgImgs.length - 1) {
         const prev = setBgImg + 1
         document.getElementById('site-background').style.backgroundImage = `url('${bgImgs[prev]}')`;
         this.props.setBg({setBgImg: prev});
      }
   }

   signOut = () => {
      this.props.logoutUser();
      clearState();
   }

	render() {
      return (
         <div className="App">
            <Clock />
            <Prompt />
            <Switch>
               <Route path='/login' component={GithubLogin} />
               <Route path='/users' component={Users} />
               <LoggedInRoute path='/posts/:id' component={Drafter} auth={this.props.userData.loggedIn} />
               <LoggedInRoute path='/posts' component={Hub} auth={this.props.userData.loggedIn} />
               <LoggedInRoute path='/drafts/new' component={Drafter} auth={this.props.userData.loggedIn} />
               <LoggedInRoute path='/drafts/:id' component={Drafter} auth={this.props.userData.loggedIn} />
               <LoggedInRoute path='/drafts' component={Hub} auth={this.props.userData.loggedIn} />
               <Route exact path='/' render={() => (
                 this.props.userData.loggedIn === false ? <Redirect to= "/login" /> : <Redirect to= "/drafts" />
               )}/>
            </Switch>
            {this.props.userData.loggedIn && 
            <div className="change-background-back-div">
               <button className="change-background-back" onClick={this.changeBackgroundBack}>&lt;</button>
            </div> }
            {this.props.userData.loggedIn && 
            <div className="change-background-div">
               <button className="change-background" onClick={this.changeBackground}>></button>
            </div> }
            {this.props.userData.loggedIn && 
            <div className="sign-out-div">
               <button className="sign-out" onClick={this.signOut}>X</button>
            </div> }
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      userData: state.userData
   }
}

export default withRouter(connect(mapStateToProps, { logoutUser, setBg, addBg })(App))