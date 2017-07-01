import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyC_H6v0KuJx1IpD1g3P5z-oTx_YRXc4iVg",
    authDomain: "upload-example-ab58e.firebaseapp.com",
    databaseURL: "https://upload-example-ab58e.firebaseio.com",
    projectId: "upload-example-ab58e",
    storageBucket: "upload-example-ab58e.appspot.com",
    messagingSenderId: "865568879802"
  };

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;