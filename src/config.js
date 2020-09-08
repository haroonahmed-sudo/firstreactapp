import * as firebase from 'firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyBSvyy_Ub5TWXtbBTrSMGxMFrx27IdlGDM",
    authDomain: "reciepe-e755a.firebaseapp.com",
    databaseURL: "https://reciepe-e755a.firebaseio.com",
    projectId: "reciepe-e755a",
    storageBucket: "reciepe-e755a.appspot.com",
    messagingSenderId: "167195307685",
    appId: "1:167195307685:web:286f728c71efcac7c5274c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase