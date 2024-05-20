const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);

// Use CORS middleware if needed
app.use(cors({
    origin: "*",
    credentials: true
}));

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log(`New connection: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });

    // Add more event handlers as needed
});

httpServer.listen(3001, () => {
    console.log(`Server running on port 3001`);
});
