/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCCpxNb318zs_mQObOPn3pOUn79Ar54WCU',
	authDomain: 'vue-blog-posts.firebaseapp.com',
	projectId: 'vue-blog-posts',
	storageBucket: 'vue-blog-posts.appspot.com',
	messagingSenderId: '893062773836',
	appId: '1:893062773836:web:b20f056c076c1d232608e9',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const postsCollection = db.collection('posts');

export { postsCollection };
