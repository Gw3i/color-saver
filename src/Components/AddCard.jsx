import "./AddCard.css";

export default function AddCard() {
  return (
    <div className="formWrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault;
        }}
      >
        <label htmlFor="inputColor">
          <input id="inputColor" type="color" required />
        </label>
        <label htmlFor="inputHexCode">
          <input id="inputHexCode" type="text" required />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}
