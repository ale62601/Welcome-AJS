import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Components/root";


// import Welcome from "react-welcome-page";

function App() {
  return (
    <div className="App">
      {}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Root />
        
      </div>
    </div>
  );
}

export default App;
