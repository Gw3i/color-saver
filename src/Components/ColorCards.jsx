import "./ColorCards.css";

export default function ColorCards({ color, hexText }) {
  return (
    <div className="color-card" style={{ backgroundColor: color }}>
      <button className="color-card__button">{hexText}</button>
    </div>
  );
}
