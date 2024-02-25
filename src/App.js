import React from "react";
import VideoList from "./Components/VideoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>YouTube Shorts Clone</h1>
      </header>
      <div className="App-section">
        <VideoList />
      </div>
    </div>
  );
}

export default App;
