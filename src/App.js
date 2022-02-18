import "./App.css";
//
// import Comptador from "./exercicis/comptador/Comptador";
// import Galeria from "./exercicis/galeria/Galeria";
//import Acordio from "./exercicis/acordio/Acordio";

// import SegonAcordio from './exercicis/acordio/SegonAcordio';
import Carousel from "./exercicis/carousel/Carousel";

function App() {
  return (
    <>
      <header className="App-header">
        <h1>Exercicis React </h1>
      </header>
      <div className="App">
        <div className="container">
          <div className="cotenidor">
            {/* <Galeria /> */}
            {/* <Comptador /> */}
            {/* <Acordio />
            <SegonAcordio /> */}
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
