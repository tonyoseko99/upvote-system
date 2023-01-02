import { io } from "socket.io-client";
import "./App.css";


//👇🏻 http://localhost:4000 is where the server host URL.
const socket = io.connect("http://localhost:4000");

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;
