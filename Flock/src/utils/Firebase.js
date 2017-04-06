import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDh1BdOGiWufTnNtIh5pLfKwBGGiZxmEeE',
  authDomain: 'flock-71423.firebaseapp.com',
  databaseURL: 'https://flock-71423.firebaseio.com',
  projectId: 'flock-71423',
  storageBucket: 'flock-71423.appspot.com',
  messagingSenderId: '480546012869'
};

const app = Firebase.initializeApp(config);
export default app;
