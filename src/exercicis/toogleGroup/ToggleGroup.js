import "./toggleGroup.css";
import { useState } from "react";

function ToggleGroup() {
  const [botoClicat, setBotoClicat] = useState();

  const textos = ["Boto-1", "Boto-2", "Boto-3"];
  const changeTextColor = (text) => {
    console.log(text);
  };

  return (
    <>
      <h2>Toggle Group</h2>
      <hr />
      {textos.map((text, index) => (
        <button
          className="toggleGroupButton"
          onClick={() => changeTextColor(text)}
          key={text}
        >
          {text}
        </button>
      ))}

      <div className="textSortidaToggleGroup">
        <h2> Text Boto </h2>
      </div>
    </>
  );
}

export default ToggleGroup;
