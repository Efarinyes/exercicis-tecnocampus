import { useState } from "react";
import "./acordio.css";

const initialText = "paragraf";

function SegonAcordio() {
  const [textClicat, setTextClicat] = useState(null);

  const mostrarTextAcordio = (text) => {
    if (text === textClicat) setTextClicat(null);
    else setTextClicat(text);
  };

  const displays = [
    {
      titol: "Sota hi ha text",
      text: "Soc el text de sota",
    },
    {
      titol: "Sota hi ha un altre text",
      text: "Soc un altre text",
    },
    {
      titol: "Sota el hi ha el tercer text",
      text: "Soc el tercer text",
    },
    {
      titol: "Sota hi ha el darrer text",
      text: "Soc el darrer text",
    },
  ];
  return (
    <>
      <h1>Acordió 2</h1>
      <hr />
      <div className="itemsAcordio">
        {displays.map((disp, index) => (
          <div key={index}>
            <h2 onClick={() => mostrarTextAcordio(index)} className="hacdos">
              {disp.titol}
            </h2>
            <div
              className={
                (index === textClicat ? "paragrafVista" : initialText) +
                " animate__animated animate__fadeIn"
              }
            >
              {disp.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default SegonAcordio;
