import "./tresEnRalla.css";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function TresEnRalla() {
  const [torn, setTorn] = useState("X");
  const [casella, setCasella] = useState(Array(9).fill(""));
  const [guanyador, setGuanyador] = useState(null);

  const comprovaGuanyador = (quadricula) => {
    let combinacions = {
      files: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      columnes: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonals: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combinacio in combinacions) {
      combinacions[combinacio].forEach((pattern) => {
        if (
          quadricula[pattern[0]] === "" ||
          quadricula[pattern[1]] === "" ||
          quadricula[pattern[0]] === ""
        ) {
        } else if (
          quadricula[pattern[0]] === quadricula[pattern[1]] &&
          quadricula[pattern[1]] === quadricula[pattern[2]]
        ) {
          MySwal.fire({
            title: "Guanyador",
            icon: "success",
            text: "Bona partida",
          });

          setGuanyador(quadricula[pattern[0]]);
        }
      });
    }
  };

  const casellaClicada = (num) => {
    if (guanyador) return;
    if (casella[num] !== "") {
      MySwal.fire({
        title: <p>No es pot</p>,
        didOpen: () => {
          MySwal.clickConfirm();
        },
      }).then(() => {
        return MySwal.fire(<p>No pots jugar a una casella jugada</p>);
      });
      return;
    }

    let quadricula = [...casella];

    if (torn === "X") {
      quadricula[num] = "X";
      setTorn("O");
    } else {
      quadricula[num] = "O";
      setTorn("X");
    }
    comprovaGuanyador(quadricula);
    setCasella(quadricula);
  };
  const reseteja = () => {
    setGuanyador(null);
    setCasella(Array(9).fill(""));
    setTorn("X");
  };

  const Casella = ({ num }) => {
    return <td onClick={() => casellaClicada(num)}> {casella[num]} </td>;
  };

  return (
    <>
      <h4> Tres en Ratlla </h4>
      <br />
      Torn de: {torn}
      <br />
      <br />
      <div className="tauler">
        <table>
          <tbody>
            <tr>
              <Casella num={0} />
              <Casella num={1} />
              <Casella num={2} />
            </tr>
            <tr>
              <Casella num={3} />
              <Casella num={4} />
              <Casella num={5} />
            </tr>
            <tr>
              <Casella num={6} />
              <Casella num={7} />
              <Casella num={8} />
            </tr>
          </tbody>
        </table>
        {guanyador && (
          <>
            <p> {guanyador} es el guanyador </p>
            <button
              onClick={() => reseteja()}
              className="btn btn-outline-success"
            >
              Vols tornar a jugar?
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default TresEnRalla;
