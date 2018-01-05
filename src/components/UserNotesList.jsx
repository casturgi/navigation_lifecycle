import React, { Component } from 'react';
import { firebaseApp, currentUser } from '../firebase';
import { connect } from 'react-redux';
import { userLoggedIn } from '../actions';

class UserNoteList extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.uid) {
      const userNotesRef = firebaseApp.database().ref(`users/${nextProps.user.uid}/notes`);
      // uses the firebase .on() function to listen for changes at the reference (path) defined above
      userNotesRef.on('value', snap => {
        let userNotes = [];
        console.log("snap", snap.val());
        snap.forEach(userNote => {
          const { note } = userNote.val();
          userNotes.push({ note: note });
        })
        this.setState({userNotes: userNotes})
      })
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      userNotes: [],
    }
  }

  render() {
    // this.updateUserList();
    console.log(this.state.userNotes);
    return (
        <div>
          {
            this.state.userNotes.map((userNote, index) => {
              return (
                  <div key={index} style={{margin: '5px'}}>
                    <h4>{userNote.note}</h4>
                  </div>
                )
            })
          }
        </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, { userLoggedIn })(UserNoteList);
