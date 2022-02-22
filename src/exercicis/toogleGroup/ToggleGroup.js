import "./toggleGroup.css";
import { useState } from "react";

function ToggleGroup() {
  const textos = ["Boto-1", "Boto-2", "Boto-3"];
  const [textBoto, setTextBoto] = useState(textos[0]);
  // const [colorBoto, setColorBoto] = useState("toggleGroupButton");

  const changeTextColor = (text) => {
    setTextBoto(text);
  };

  return (
    <>
      <h2>Toggle Group</h2>
      <hr />
      {textos.map((text, index) => (
        <button
          className="toggleGroupButton"
          onClick={() => changeTextColor(text)}
          key={index}
        >
          {text}
        </button>
      ))}

      <div className="textSortidaToggleGroup">
        <h2> {textBoto} </h2>
      </div>
    </>
  );
}

export default ToggleGroup;
