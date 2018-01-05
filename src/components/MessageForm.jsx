import React, { Component } from 'react';
import { messageRef, firebaseApp } from '../firebase.js';

class MessageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
  }

  sendMessage() {
    console.log("send message triggered");
    const { message } = this.state;
    const { currentUser } = firebaseApp.auth();
    messageRef.push({ message: message, author: currentUser.email });
  }

  render() {
    return(
      <div className="form-inline">
        <div className="formGroup">
          <input
            type="text"
            placeholder="Type message here"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({message: event.target.value})}
            />
          <button
            type="button"
            className="btn btn-primary"
            style={{ float: 'center'}}
            onClick={() => this.sendMessage()}
            >Send</button>
        </div>
      </div>
    )
  }
}

export default MessageForm;
