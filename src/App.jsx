import "./App.css";
import React, { useState } from "react";
import ColorCards from "./Components/ColorCards";
import { nanoid } from "nanoid";

function App() {
  const [colorCodes, setColorCodes] = useState([
    {
      id: nanoid(),
      colorCode: "#fe9f8e",
    },
    {
      id: nanoid(),
      colorCode: "#212b36",
    },
    {
      id: nanoid(),
      colorCode: "#e36da3",
    },
  ]);

  console.log(colorCodes);

  return (
    <>
    
      <ColorCards />
    </>
  );
}

export default App;
