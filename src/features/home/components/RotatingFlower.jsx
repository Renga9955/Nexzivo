
import "./RotatingFlower.css";

const petals = Array.from({ length: 12 }, (_, index) => index);

export default function RotatingFlower() {
  return (
    <div className="nexzivo-flower-scene" aria-hidden="true">
      <div className="nexzivo-flower">
        {petals.map((index) => (
          <div
            key={index}
            className="nexzivo-flower-petal"
            style={{ "--petal-angle": `${index * 30}deg` }}
          />
        ))}

        <div className="nexzivo-flower-core" />
      </div>
    </div>
  );
}
