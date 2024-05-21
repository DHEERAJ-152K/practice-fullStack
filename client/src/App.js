import React, { useEffect } from 'react';
import './App.css';
const { io } = require('socket.io-client');
const socket = io("http://localhost:4000");

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log(`Connected with ID: ${socket.id}`);
    });

    return () => {
      socket.off("connect");
    };
  }, []);

  return (
    <div className="App">
      <h2>Messenger APP</h2>
      <form type="submit">
        <input placeholder="Enter the message"></input>
        <button>Enter</button>
      </form>
    </div>
  );
}

export default App;
