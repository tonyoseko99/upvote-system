const express = require("express");
const app = express();
const port = 4000;

// import HTTP and CORS library
const http = require("http").Server(app);
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from server!",
  });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
