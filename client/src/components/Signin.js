import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            email: '',
            passowrd: ''
        };
    };

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    };

    handlePasswordChange(e) {
        this.setState({ password: e.target.value})
    };

    signIn() {
        alert('Email is ' + this.state.email + ' Password is ' + this.state.password );
    };

    axios.post('./signin', {
        email: this.state.email,
        password: this.state.password
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });

    render() {
        return (
            <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label for="inputEmail" className="sr-only"> Email address</label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                <button onClick={this.signIn} className="btn btn-lg btn-primary btn-block" type="button"> Sign in</button>
            </form>
        )
    };
}

export default Signin;