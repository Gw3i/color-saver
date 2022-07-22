import "./App.css";
import React, { useState } from "react";
import ColorCard from "./Components/ColorCard";
import { nanoid } from "nanoid";
import AddCard from "./Components/AddCard";

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
  ]);

  function handleColorCode(colorCode) {
    setColorCodes([...colorCodes, { id: nanoid(), colorCode }]);
  }

  return (
    <>
      <AddCard onColorCode={handleColorCode} />
      <ul>
        {colorCodes.map((colorCode) => {
          return (
            <li key={colorCode.id}>
              <ColorCard color={colorCode.colorCode} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
