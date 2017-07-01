import * as firebase from 'firebase';


const config = {
    apiKey: "yourCompleXapiKey",
    authDomain: "upload-example.firebaseapp.com",
    databaseURL: "https://upload-example.firebaseio.com",
    projectId: "upload-example",
    storageBucket: "upload-example.appspot.com",
    messagingSenderId: "967468070501"
  };

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;