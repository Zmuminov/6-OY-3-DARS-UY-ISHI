import React, { useState } from "react";
import "./App.css";

function App() {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 2000);
  };

  return (
    <div className="container">
      <div className={`baraban ${rotate ? "rotate" : ""}`}>Baraban</div>
      <button onClick={handleClick}>Rotate</button>
    </div>
  );
}

export default App;
