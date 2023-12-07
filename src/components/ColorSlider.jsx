// ColorSlider.jsx
function ColorSlider({ color, colorValue, colorHandler }) {
    return (
      <div className="input-group">
        <span>{color}</span>{" "}
        <input
          type="range"
          min="0"
          max="255"
          name={color.toLowerCase()}
          value={colorValue}
          onInput={(e) => colorHandler(e, color.toLowerCase())}
        />
      </div>
    );
  }
  
  export default ColorSlider;
  