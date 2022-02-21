import "./comptador.css";
import { useState } from "react";

function Comptador() {
  const [comptador, setComptador] = useState(0);
  const suma = () => {
    setComptador(comptador + 1);
    if (comptador === 10) setComptador(10);
  };
  const sumaCinc = () => {
    setComptador(comptador + 5);
    if (comptador > 5) setComptador(5);
  };

  const resta = () => {
    setComptador(comptador - 1);
    if (comptador === 0) setComptador(0);
  };

  return (
    <>
      <h1> Comptador </h1>

      <div className="comptador-container">
        <div className="display"> {comptador} </div>
        <div className="btnContenidor">
          <button type="button" className="botoComptador" onClick={suma}>
            +1
          </button>
          <button type="button" className="botoComptador" onClick={resta}>
            -1
          </button>
        </div>
        <div className="botoMesCinc">
          <button type="button" className="botoCinc" onClick={sumaCinc}>
            +5
          </button>
        </div>
      </div>
    </>
  );
}

export default Comptador;
