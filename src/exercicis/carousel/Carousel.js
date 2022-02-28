import { useState } from "react";
import "./carousel.css";

const imatges = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

// imatges
// import img1 from "./../../img/1.jpg";
// import img2 from "./../../img/2.jpg";
// import img3 from "./../../img/3.jpg";
// import img4 from "./../../img/4.jpg";
// import left from "./../../img/left.png";
// import right from "./../../img/right.png";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const mouFoto = (direccio) => {
    let increment = direccio === "right" ? +1 : -1;
    let nextImage = currentImage + increment;
    let imageCount = imatges.length;
    nextImage = (nextImage + imageCount) % imageCount;
    setCurrentImage(nextImage);
  };
  return (
    <>
      <h1> Carrussel </h1>
      <hr />
      <p className="titol"> Slider de rellotges</p>
      <div className="sliderContainer">
        <div className="contenidorSlideShow">
          {imatges.map((imatge, index) => (
            <div
              className="slides"
              style={{ left: -currentImage * 100 + "%" }}
              key={index}
            >
              <img src={`images/${imatge}`} alt={`images/${imatge}`} />
              <p className="textSlide"> Mostra de rellotges intel·ligents</p>
            </div>
          ))}
        </div>

        <div className="controls">
          <button className="boto">
            <img
              src="images/left.png"
              alt="Arrow-left"
              onClick={() => mouFoto("left")}
            />
          </button>
          <button className="boto" id="dreta">
            <img
              src="images/right.png"
              alt="Arrow-right"
              onClick={() => mouFoto("right")}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
