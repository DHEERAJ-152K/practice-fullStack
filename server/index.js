const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors=require('cors');

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log(`New connections: ${socket.id}`);
  
    socket.on("messages", (message) => {
      console.log(`Received message: ${message}`);
      
      io.emit("messages", message);
    });

    
});

httpServer.listen(4000, () => {
    console.log(`Server running on port 4000`);
});
