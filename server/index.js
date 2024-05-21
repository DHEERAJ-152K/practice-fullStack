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
    console.log(`New connection: ${socket.id}`);  // This will log the socket ID to the terminal
});

httpServer.listen(4000, () => {
    console.log(`Server running on port 4000`);
});
