import { useState } from "react";

const fotos = ["dog.jpg", "dog-2.jpg", "dog-3.jpg", "dog-4.jpg", "dog-5.jpg"];

function Galeria() {
  const initialClase = "img-thumbnail";
  const initialClicat = null;

  const [clase, setClase] = useState(initialClase);
  const [clicat, setClicat] = useState(initialClicat);

  const changeState = (foto) => {
    clase === "img-thumbnail"
      ? setClase("imatge-gran")
      : setClase(initialClase);
    setClicat(foto);
  };
  return (
    <>
      <h1> Galeria de fotos </h1>

      <div className="row">
        {fotos.map((foto) => (
          <div className="col-md" key={foto}>
            <img
              src={`images/${foto}`}
              alt={`images/${foto}`}
              className={foto === clicat ? clase : initialClase}
              onClick={() => changeState(foto)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Galeria;
