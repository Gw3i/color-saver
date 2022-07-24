import "./ColorCard.css";

export default function ColorCard({
  color,
  setColorCodes,
  colorCodes,
  colorCode,
}) {
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
      <button
        className="delete-button"
        onClick={() => {
          setColorCodes(
            colorCodes.filter((listItem) => listItem.id !== colorCode.id)
          );
        }}
      >
        <ion-icon
          name="close-circle-outline"
          onMouseOver={(event) => {
            event.target.name = "close-circle";
          }}
          onMouseOut={(event) => {
            event.target.name = "close-circle-outline";
          }}
        ></ion-icon>
      </button>
    </div>
  );
}
