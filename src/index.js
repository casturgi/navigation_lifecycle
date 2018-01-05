import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './components/screens/Welcome.jsx';
import SignIn from './components/screens/SignIn.jsx';
import SignUp from './components/screens/SignUp.jsx';
import NewsFeed from './components/screens/NewsFeed.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory, Route } from 'react-router';
import { firebaseApp } from './firebase.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { userLoggedIn } from './actions';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { currentUser } = firebaseApp.auth();
    console.log('Currently logged in user', currentUser);
    store.dispatch(userLoggedIn(currentUser.uid));
    browserHistory.push('/newsfeed');
    // save the current user's uid to redux store.
  } else {
    browserHistory.push('/signin');
    // delete the current user's uid from the redux store.
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/welcome" component={Welcome} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/newsfeed" component={NewsFeed} />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
