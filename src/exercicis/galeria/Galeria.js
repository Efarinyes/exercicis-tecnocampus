import { useState } from "react";

const fotos = [
  "/images/dog.jpg",
  "/images/dog-2.jpg",
  "/images/dog-3.jpg",
  "/images/dog-4.jpg",
  "/images/dog-5.jpg",
].map((foto) => process.env.PUBLIC_URL + foto);

function Galeria() {
  const initialClase = "img-thumbnail";
  const initialClicat = null;

  const [clicat, setClicat] = useState(initialClicat);

  const changeState = (foto) => {
    if (foto === clicat) setClicat(null);
    else setClicat(foto);
  };
  return (
    <>
      <h1> Galeria de fotos </h1>

      <div className="row">
        {fotos.map((foto) => (
          <div className="col-md" key={foto}>
            <img
              src={foto}
              alt={foto}
              className={foto === clicat ? "imatge-gran" : initialClase}
              onClick={() => changeState(foto)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Galeria;
