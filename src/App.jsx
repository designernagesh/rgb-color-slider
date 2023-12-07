import { useState } from "react";

function App() {
  const [rgb, setRgb] = useState([233, 236, 239]);

  const colorHandler = (e) => {
    const index = e.target.name;
    setRgb(prevRgb => {
      const newRgb = [...prevRgb];
      newRgb[index] = e.target.value;
      return newRgb;
    })

    document.body.style.backgroundColor = `rgb(${rgb})`;
  }

  return (
    <>
      <div className="container">
        <h2 className="title">RGB Color Slider</h2>
        <p className="sub-title">
          Change each slider and observe the Body Background Color! 😊
        </p>

        <div className="input-group">
          R<input type="range" min="0" max="255" value={rgb[0]} name="0" onInput={colorHandler} />
        </div>
        <div className="input-group">
          G<input type="range" min="0" max="255" value={rgb[1]} name="1" onInput={colorHandler} />
        </div>
        <div className="input-group">
          B<input type="range" min="0" max="255" value={rgb[2]} name="2" onInput={colorHandler} />
        </div>
        <span className="result">rgb({rgb.join(", ")})</span>

      </div>
    </>
  );
}

export default App;
