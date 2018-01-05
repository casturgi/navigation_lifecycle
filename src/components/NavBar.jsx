import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import { browserHistory } from 'react-router';
import { firebaseApp } from '../firebase';

function handleClickTitle() {
  browserHistory.push('/welcome');
}

function handleLogin() {
  browserHistory.push('/signin');
}

function handleSignUp() {
  browserHistory.push('/signup');
}

function handleLogOut() {
  firebaseApp.auth().signOut();
}

function handleClickHome() {
  const { currentUser } = firebaseApp.auth();
  console.log(currentUser);
  if (currentUser) {
    browserHistory.push('/newsfeed');
  } else {
    browserHistory.push('/welcome');
  }
}

function renderButtons() {
    const { currentUser } = firebaseApp.auth();
    console.log(currentUser);
    if (currentUser) {
      return(<div><FlatButton label="Log Out" onClick={handleLogOut}/></div>);
    }
    return (
          <div>
            <FlatButton label="Sign Up" onClick={handleSignUp}/>
            <FlatButton label="Log In" onClick={handleLogin}/>
          </div>
        );
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const iconStyles = {
  margin: 12,
  color: '#fff',
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const NavBar = () => (
  <MuiThemeProvider>
    <AppBar
      title={<span style={styles.title}>Super Slick Site</span>}
      iconElementLeft={<HomeIcon style={iconStyles} hoverColor={blue500}  onClick={handleClickHome}/>}
      iconElementRight={renderButtons()}
    />
  </MuiThemeProvider>
);

export default NavBar;
