import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import MessageList from '../MessageList.jsx';
import MessageForm from '../MessageForm.jsx';
import UserNotesList from '../UserNotesList.jsx';
import CreateUserNote from '../CreateUserNote.jsx';

// to render change to real time chat functionality, replace
// <CreateUserNote />
// <UserNotesList />
// with
// <MessageForm />
// <MessageList />

class NewsFeed extends Component {

  render() {
    return (
        <div>
          <NavBar />
          <div style={{ margin: '10px' }}>
            <CreateUserNote />
            <UserNotesList />
          </div>
        </div>
    )
  }
}

export default NewsFeed;
