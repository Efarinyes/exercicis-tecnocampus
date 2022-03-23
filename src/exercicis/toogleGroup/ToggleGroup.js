import "./toggleGroup.css";
import { useState } from "react";

// let botoClicat = "";
function ToggleGroup() {
  const textos = ["Boto-1", "Boto-2", "Boto-3"];
  const [textBoto, setTextBoto] = useState(textos[0]);
  const [botoClicat, setBotoClicat] = useState("");

  const changeTextColor = (text) => {
    setTextBoto(text);
    botoClicat ? setBotoClicat(null) : setBotoClicat(text);
  };

  return (
    <>
      <h2>Toggle Group</h2>
      <hr />
      {textos.map((text, index) => (
        <button
          className={text === botoClicat ? "red" : "toggleGroupButton"}
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
