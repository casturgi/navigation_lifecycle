import { SIGNED_IN, GET_USER_NOTES } from '../constants';
import { firebaseApp } from '../firebase';

export function userLoggedIn(uid) {
  console.log('userLoggedIn action fired');

  //fetch requests or communicate with other data sources that we need to use in a lot of different components

  // all of the business logic should take place here in the actions.
  // and pass the result of these action functions to reducers for them to update state

  const action = {
    type: SIGNED_IN,
    uid
  }
  return action;
}
