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
    {
      id: nanoid(),
      colorCode: "#35bcc3",
    },
    {
      id: nanoid(),
      colorCode: "#a44eca",
    },
    {
      id: nanoid(),
      colorCode: "#3d3d3d",
    },
  ]);

  console.log(colorCodes);

  return (
    <>
      <ColorCards(colorCode) />
      <ColorCards />
      <ColorCards />
      <ColorCards />
      <ColorCards />
      <ColorCards />
    </>
  );
}

export default App;
