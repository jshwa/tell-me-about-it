import React, { Component } from 'react';

class GithubLogin extends Component {
    render(){
        return (
            <a href='https://github.com/login/oauth/authorize?client_id=a345733541ea45055fcb&scope=user'>Login with Github</a>
        )
    }
}

export default GithubLogin