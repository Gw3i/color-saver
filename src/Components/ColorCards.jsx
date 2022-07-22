import "./ColorCards.css";

export default function ColorCards({ color }) {
  return (
    <div className="color-card" style={{ backgroundColor: { color } }}>
      <button className="color-card__button">hex code</button>
    </div>
  );
}
