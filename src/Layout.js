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
              <Link to="SegonAcordio">SegonAcordio</Link>
              <Link to="Comptador">Comptador</Link>
              <Link to="Galeria">Galeria</Link>
              <Link to="Carousel">Carousel</Link>
              <Link to="Toggle">Toggle</Link>
              <Link to="ToggleGroup">ToggleGroup</Link>
              <Link to="ArrayOne"> Array one </Link>
              <Link to="TresEnRalla"> Tres en ratlla </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="App">
        <div className="container">
          <div className="cotenidor">
            <br />
            <h4>
              Enllaços als exercicis del curs FrontEnd del Tecnocampus amb React
              JS
            </h4>
            <br />
            <br />
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
