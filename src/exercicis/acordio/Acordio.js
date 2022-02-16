import { useState } from "react";
import "./acordio.css";

const initialText = "paragraf";

function Acordio() {
  const [text, setText] = useState(initialText);
  const mostrarText = () => {};
  return (
    <>
      <h2> Acordio </h2>
      <div className="itemsAcordio">
        <h2 onClick={() => mostrarText()} className="hacdos">
          Soc el titular
        </h2>
        <p className="paragraf"> Soc el text amagat </p>
      </div>
    </>
  );
}

export default Acordio;
