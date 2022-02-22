import { useState } from "react";
import "./toggle.css";

function Toggle() {
  const [textBoto, setTextBoto] = useState("Clica");
  const [colorBoto, setColorBoto] = useState("toggleButton");

  const canviaText = () => {
    textBoto === "Clica" ? setTextBoto("Has clicat") : setTextBoto("Clica");
    colorBoto === "toggleButton"
      ? setColorBoto("red")
      : setColorBoto("toggleButton");
  };

  return (
    <>
      <h1> Toggle </h1>
      <hr />
      <div>
        <button onClick={canviaText} className={colorBoto}>
          {textBoto}
        </button>
        <br />
        <br />
        <div className="textSortida">
          <h2> {textBoto} </h2>
        </div>
      </div>
    </>
  );
}

export default Toggle;
