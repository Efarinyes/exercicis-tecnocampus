import "./App.css";
import Comptador from "./exercicis/comptador/Comptador";
// import Galeria from "./exercicis/galeria/Galeria";

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
            <Comptador />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
