import firebase from 'firebase'
import { getSecret } from './secrets';

var config = {
  apiKey: getSecret('firebase_key'),
  authDomain: "broccolicheddarsoup-57b28.firebaseapp.com",
  databaseURL: "https://broccolicheddarsoup-57b28.firebaseio.com",
  projectId: "broccolicheddarsoup-57b28",
  storageBucket: "broccolicheddarsoup-57b28.appspot.com",
  messagingSenderId: "244662920719"
};
firebase.initializeApp(config);

export default firebase;