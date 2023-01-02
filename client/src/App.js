import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import UploadPhoto from "./components/UploadPhoto";
import MyPhotos from "./components/MyPhotos";
import SharePhoto from "./components/SharePhoto";
import Photos from "./components/Photos";

// configure react tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// configure websocket
import { io } from "socket.io-client";
import "./App.css";

// http://localhost:4000 is where the server host URL.
const socket = io.connect("http://localhost:4000");

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login socket={socket} />} />
          <Route path="/register" element={<Register socket={socket} />} />
          <Route path="/photos" element={<Photos socket={socket} />} />
          <Route
            path="/photos/upload"
            element={<UploadPhoto socket={socket} />}
          />
          <Route path="/user/photos" element={<MyPhotos socket={socket} />} />
          <Route path="/share/:user" element={<SharePhoto socket={socket} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
