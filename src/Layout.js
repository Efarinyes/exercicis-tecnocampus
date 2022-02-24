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
            </li>
          </ul>
        </div>
      </header>
      <div className="App">
        <div className="container">
          <div className="cotenidor">
            <br />
            <h2>
              Enllaços als exercicis del curs FrontEnd del Tecnocampus amb React
              JS
            </h2>
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
