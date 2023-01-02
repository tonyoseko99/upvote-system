const express = require("express");
const app = express();
const port = 4000;

// import HTTP and CORS library
const http = require("http").Server(app);
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const SocketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

SocketIO.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id} successfully!`);

  socket.on("disconnect", () => {
    socket.disconnect();
    console.log(`Socket disconnected: ${socket.id} successfully!`);
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from server!",
  });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
