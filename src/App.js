import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";

import Galeria from "./exercicis/galeria/Galeria";
import Acordio from "./exercicis/acordio/Acordio";
import Layout from "./Layout";
import SegonAcordio from "./exercicis/acordio/SegonAcordio";
import Carousel from "./exercicis/carousel/Carousel";
import Comptador from "./exercicis/comptador/Comptador";
import Toggle from "./exercicis/toggle/Toggle";
import ToggleGroup from "./exercicis/toogleGroup/ToggleGroup";
import ArrayOne from "./exercicis/MetodesArrays/ArrayOne";

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

            <Route path="Toggle" element={<Toggle />} />

            <Route path="ToggleGroup" element={<ToggleGroup />} />
            <Route path="ArrayOne" element={<ArrayOne />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
