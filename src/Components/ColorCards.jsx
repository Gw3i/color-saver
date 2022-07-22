import "./ColorCards.css";

export default function ColorCards(colorCodes) {
  return (
    <div className="color-card" style={{ backgroundColor: { colorCodes } }}>
      <button className="color-card__button">hex code</button>
    </div>
  );
}
