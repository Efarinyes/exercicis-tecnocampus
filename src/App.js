import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";

import Galeria from "./exercicis/galeria/Galeria";
import Acordio from "./exercicis/acordio/Acordio";
import Layout from "./Layout";
import SegonAcordio from "./exercicis/acordio/SegonAcordio";
import Carousel from "./exercicis/carousel/Carousel";
import Comptador from "./exercicis/comptador/Comptador";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Acordio" element={<Acordio />} />

            <Route path="SegonAcordio" element={<SegonAcordio />} />

            <Route path="Galeria" element={<Galeria />} />

            <Route path="Carousel" element={<Carousel />} />

            <Route path="Comptador" element={<Comptador />} />

            <Route path="Carousel" element={<Carousel />} />
          </Route>
        </Routes>
      </HashRouter>
      <h1 className='App'> Llistat d'exercicis del curs del Tecnocampus</h1>
    </>
  );
}

export default App;
