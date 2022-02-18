import { useState } from "react";
import "./acordio.css";

const initialText = "paragraf";

function Acordio() {
  //const [text, setText] = useState(initialText);
  const [textClicat, setTextClicat] = useState(null);

  const mostrarText = (text) => {
    if (text === textClicat) setTextClicat(null);
    else setTextClicat(text);
  };

  
  return (
    <>
      <h1> Acordió </h1>
      <hr />
      <div className="itemsAcordio">
        <h2 onClick={() => mostrarText(0)} className="hacdos">
          Soc el titular 1
        </h2>
        <div
          className={
            (0 === textClicat ? "paragrafVista" : initialText) +
            " animate__animated animate__fadeIn"
          }
        >
          Soc el text amagat 1
        </div>
        <h2 onClick={() => mostrarText(1)} className="hacdos">
          Soc el titular 2
        </h2>
        <div
          className={
            (1 === textClicat ? "paragrafVista" : initialText) +
            " animate__animated animate__fadeIn"
          }
        >
          Soc el text amagat 2
        </div>
        <h2 onClick={() => mostrarText(2)} className="hacdos">
          Soc el titular 3
        </h2>
        <div
          className={
            (2 === textClicat ? "paragrafVista" : initialText) +
            " animate__animated animate__fadeIn"
          }
        >
          Soc el text amagat 3
        </div>
        <hr />
      </div>

      
    </>
  );
}

export default Acordio;
