import { useState } from "react";
import ColorSlider from "./components/ColorSlider";

function App() {
  const [rgb, setRgb] = useState([233, 236, 239]);

  const colorHandler = (e, index) => {
    setRgb((prevRgb) => {
      const newRgb = [...prevRgb];
      newRgb[index] = e.target.value;
      document.body.style.backgroundColor = `rgb(${newRgb.join(", ")})`;
      return newRgb;
    });
  };


  return (
    <>
      <div className="container">
        <h2 className="title">RGB Color Slider</h2>
        <p className="sub-title">
          Change each slider and observe the Body Background Color! 😊
        </p>

        <ColorSlider
          color="R"
          colorValue={rgb[0]}
          colorHandler={(e) => colorHandler(e, 0)}
        />
        <ColorSlider
          color="G"
          colorValue={rgb[1]}
          colorHandler={(e) => colorHandler(e, 1)}
        />
        <ColorSlider
          color="B"
          colorValue={rgb[2]}
          colorHandler={(e) => colorHandler(e, 2)}
        />
        <span className="result">rgb({rgb.join(", ")})</span>
      </div>
    </>
  );
}

export default App;
