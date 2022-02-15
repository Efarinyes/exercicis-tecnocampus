import { useState } from "react";

const fotos = ["dog.jpg", "dog-2.jpg", "dog-3.jpg", "dog-4.jpg", "dog-5.jpg"];

function Galeria() {
  const initialClase = "img-thumbnail";
  const [clase, setClase] = useState(initialClase);
  const [clicada, setClicada] = useState("");

  const seleccioImatge = (foto) => {};

  return (
    <>
      <h1> Galeria de fotos </h1>

      <div className="container">
        <div className="cotenidor">
          <div className="row">
            {fotos.map((foto) => (
              <div className="col-md-3" key={foto}>
                <img
                  src={`images/${foto}`}
                  alt="pajarito"
                  className={clase}
                  onClick={() => seleccioImatge(foto)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Galeria;
