import React , { Component } from 'react';
import { messageRef } from '../firebase';

class MessageList extends Component {

  componentDidMount() {
      messageRef.on('value', snap => {
        let messages = [];
        snap.forEach(response => {
          let { message, author } = response.val();
          messages.push({ message, author });
        })
        this.setState({messages: messages});
      })
  }

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  render() {
    return(
      <div>
        {
          this.state.messages.map((post, index) => {
            return (
                <div key={index} style={{margin: '5px'}}>
                  <h4>{post.message}</h4>
                  <p>-{post.author}</p>
                </div>
              )
          })
        }
      </div>
    )
  }
}
export default MessageList;
