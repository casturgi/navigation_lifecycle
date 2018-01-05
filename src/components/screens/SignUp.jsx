import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import { firebaseApp } from '../../firebase';
import { browserHistory } from 'react-router';


class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    const { email, password, confirmPassword } = this.state;
    console.log(`email = ${email} password = ${password} confirmPassword = ${confirmPassword}`);

    if (password === confirmPassword) {
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          browserHistory.push('/newsfeed');
        })
        .catch(error => {
          this.setState({ error })
        })
    } else {
      this.setState({ error: { message: "Your Passwords dont match dummy."}});
    }
  }

  render() {
    return (
        <div>
          <NavBar />
          <h1>SIGN UP</h1>
            <div>
              <input
                type="text"
                placeholder="email..."
                onChange={ event => { this.setState({ email: event.target.value })}}
              />
              <input
                type="password"
                placeholder="password..."
                onChange={ event => { this.setState({ password: event.target.value })}}
              />
              <input
                type="password"
                placeholder="confirm password..."
                onChange={ event => { this.setState({ confirmPassword: event.target.value })}}
              />
              <button
                type="button"
                onClick={() => this.signUp()}
                >
                Sign Up
              </button>
            </div>
            <div>{this.state.error.message}</div>
        </div>
    )
  }
}

export default SignUp;
