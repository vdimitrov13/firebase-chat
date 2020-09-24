import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    //add firebase config here
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn(){
  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
  }

  return (
      <button onClick={signInWithGoogle}>Sign In With Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const messageRef = firebase.firestore().collection('messages');
  const query = messageRef.orderBy('createdAt').limit(15);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return (
      <>
          <div>
              {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
          </div>

          <div>
              
          </div>
      </>
  )
}

function ChatMessage(props){
  const {text, uid} = props.message;

  return <p>{text}</p>
}

export default App;
