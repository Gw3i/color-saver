import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <div className="color-card" style={{ backgroundColor: color }}>
      <button
        className="color-card__button"
        onClick={() => {
          navigator.clipboard.writeText(color).then(() => {
            alert(
              "color copied to clipboard"
            ); /*Notification, dass ColorCode kopiert wurde*/
          });
        }}
      >
        {color}
      </button>
    </div>
  );
}
