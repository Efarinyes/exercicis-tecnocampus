import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="App-header">
        <h1>Exercicis - Tecnocampus </h1>
        <div>
          <ul>
            <li>
              <Link to="/">Inici</Link>
              <Link to="Acordio">Acordio</Link>
              <Link to="Comptador">Comptador</Link>
              <Link to="SegonAcordio">SegonAcordio</Link>
              <Link to="Galeria">Galeria</Link>
              <Link to="Carousel">Carousel</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="App">
        <div className="container">
          <div className="cotenidor">
            <Outlet />

            {/* <Galeria /> */}
            {/* <Comptador /> */}
            {/* <Acordio />
              <SegonAcordio /> */}
            {/* <Carousel /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
