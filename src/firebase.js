import * as firebase from 'firebase';

var config = {
  //add your firebase credentials here
  //make sure to enable email auth from the firebase console 
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};



export const firebaseApp = firebase.initializeApp(config);
export const messageRef = firebase.database().ref('messages');
