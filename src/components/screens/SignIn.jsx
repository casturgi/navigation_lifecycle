import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import { browserHistory } from 'react-router';
import { firebaseApp } from '../../firebase';

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      error: {
        message: ''
      }
    }
  }

  signIn() {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({isLoggedIn: true});
        browserHistory.push('/newsfeed');
      })
      .catch(error => {
        this.setState({ error });
      })
  }

  render() {
    return (
        <div>
          <NavBar />
          <h1>SIGN IN</h1>
          <div>
            <input
              type="text"
              placeholder="email..."
              onChange={ event => { this.setState({email: event.target.value}) } }
            />
            <input
              type="text"
              placeholder="password..."
              onChange={ event => { this.setState({password: event.target.value}) } }
            />
            <button
              type="button"
              onClick={() => this.signIn()}
              >
              Sign In
            </button>
          </div>
          <div>{this.state.error.message}</div>
        </div>
    )
  }
}

export default SignIn;
