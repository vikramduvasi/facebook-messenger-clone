import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run when app component loads.
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    //  const username = prompt('please enter your name');
    setUsername(prompt('please enter your name'))
  }, []) //condition

  const sendMessage = (event) => {
    // all the logic for messages goes here
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.0-1/p200x200/121144316_4235843479868633_1561909311908486242_o.png?_nc_cat=1&ccb=2&_nc_sid=dbb9e7&_nc_ohc=XhjuDNqKW2AAX_L26wP&_nc_oc=AQkNwHRdAA78wrDmp8sDHDskatu0ojkTpiJqMZZNwBAXLXOyt9VYaIOgp7RnCy3_1lk&_nc_ht=scontent.fsyd4-1.fna&oh=533ba9ad78106ae9dbdd32bd31bd35b6&oe=5FC61EE4" />
      <h1>Meseenger</h1>
      <h1> Hello Clever programmer </h1>
      <h2> Welcome {username} </h2>

      <form className="app_form" >
        <FormControl className="app_formControl">

          <Input className="app_input" placeholder='Enter a message..' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      { /* input field */
    /* button */
     /* messages themselves */}
      <FlipMove>{
        messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))
      }</FlipMove>


    </div>
  );
}

export default App;
