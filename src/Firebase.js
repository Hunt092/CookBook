import firebase from 'firebase'
var firebaseConfig = {
	apiKey: "AIzaSyBYk3RvaWAxPv-p7oyj3JZn2UenG6fVrZA",
	authDomain: "cookbook-001.firebaseapp.com",
	projectId: "cookbook-001",
	storageBucket: "cookbook-001.appspot.com",
	messagingSenderId: "829552561174",
	appId: "1:829552561174:web:d8d2fe072d2625bcf17937",
	measurementId: "G-2GN8XGEB0J",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const analytics =firebase.analytics();


export {storage, analytics}
export default db