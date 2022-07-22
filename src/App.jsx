import "./App.css";
import React, { useState } from "react";
import ColorCard from "./Components/ColorCard";
import { nanoid } from "nanoid";

function App() {
  //const [colorCodes, setColorCodes] = useState(

  const colorCodes = [
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
  ];

  console.log(colorCodes);

  return (
    <>
      <ul>
        {colorCodes.map((colorCode) => {
          return (
            <li key={colorCode.id}>
              <ColorCard
                color={colorCode.colorCode}
                hexText={colorCode.colorCode}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
