import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';

class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
  }

  render() {
    return (
        <div>
          <NavBar />
          <h1>WELCOME</h1>
        </div>
    )
  }
}

export default Welcome;
