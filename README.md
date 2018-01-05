This project was created with create-react-app, please refer to their documentation for any questions regarding its use in generating boilerplate for React.js applications. 

Before you run this app, you need to visit the firebase.js file and add your firebase credentials inside the config const object.

To run this app, first make sure that you 'cd' into the root directory and run 'yarn install' and 'yarn start' to launch the app.

The initial function of this app (after auth) is to save user notes and demonstrate managing user specific data with firebase/redux.
To change to the real-time-chat functionality, go to the NewsFeed.jsx file in src/components/screens and uncomment the MessageForm and MessageList component tags. In addition, comment out the CreateUserNote and UserNotesList tags to remove the notes portion. 
