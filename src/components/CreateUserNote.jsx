import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import { userLoggedIn } from '../actions';

class CreateUserNote extends Component {

  componentDidUpdate() {
      console.log('user UID: ', this.props);
  }

  constructor(props) {
    super(props);

    this.state = {
      note: '',
    }
  }

  onNoteSaved() {
    const userNotesRef = firebaseApp.database().ref(`users/${this.props.user.uid}/notes`);
    const { note } = this.state;
    userNotesRef.push({ note });
    console.log('save note button pressed');
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={event => this.setState({ note: event.target.value })}
          />
        <button
          type="button"
          onClick={() => this.onNoteSaved()}>
          Save Note
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  console.log('user PROP ', user);
  return {
    user
  }
}

export default connect(mapStateToProps, { userLoggedIn })(CreateUserNote);
