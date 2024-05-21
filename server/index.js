const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log(`New connection: ${socket.id}`);
  
    socket.on("message", (message) => {
      console.log(`Received message: ${message}`);
      io.emit("message", message); // Broadcast the message to all connected clients
    });
});

httpServer.listen(4000, () => {
    console.log(`Server running on port 4000`);
});
