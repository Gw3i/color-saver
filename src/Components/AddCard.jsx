import React from "react";
import "./AddCard.css";
import { useState } from "react";

export default function AddCard({ onColorCode }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="formWrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onColorCode(inputValue);
        }}
      >
        <label htmlFor="inputColor">
          <input
            id="inputColor"
            type="color"
            value={inputValue}
            required
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </label>
        <label htmlFor="inputHexCode">
          <input
            id="inputHexCode"
            type="text"
            required
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}
