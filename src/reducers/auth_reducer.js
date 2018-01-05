import { SIGNED_IN } from '../constants';

let user = {
  uid: '',
}

export default (state = user, action) => {
  console.log('auth reducer fired uid => ', action.uid);
  switch (action.type) {
    case SIGNED_IN:
      const { uid } = action;
      user = {
        uid
      }
      return user;
    default:
      return state;
  }
}
