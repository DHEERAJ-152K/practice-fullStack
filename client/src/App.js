import React, { useEffect, useState } from 'react';
import './App.css';
const { io } = require('socket.io-client');
const socket = io("http://localhost:4000");

function App() {

  const [messages, setMessages]=useState('');
  const [prevMsg, SetPrevMsg]= useState('');

 
  const sendText=(e)=>{   //sending the message to server
    e.preventDefault();
    socket.emit("messages", messages);
    setMessages('');
  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`Connected with ID: ${socket.id}`);
    });

    socket.on('messages',(msg)=>{   //catching the message from server
      console.log(msg);
    })

    return () => {
    };
  }, []);

  return (
    <div className="App">
      <h2>Messenger.io</h2>
      <p></p>
      <form onSubmit={sendText}>

        <input type='text' placeholder="Enter the message"
        value={messages} onChange={e=>setMessages(e.target.value)}>
        </input>

        <button type='submit'>Enter</button>
      </form>

    </div>
  );
}

export default App;
