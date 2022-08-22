import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";
import { useState } from "react";

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
    <header className="header">
      <div className="logo">
          <div className="play"></div>
      </div>
      <h1>MoviesTime</h1>
    </header>

    <nav className="nav" id="inicio">
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#peliculas-inicio">Películas</a></li>
        <li><a href="#pedro-venegas">Contacto</a></li>
      </ul>
    </nav>

    <section className="content" id="peliculas-inicio">
      
      <Listado listadoState={listadoState} setListadoState={setListadoState}/>

    </section>

    <aside className="lateral">

     <Buscador  listadoState={listadoState} setListadoState={setListadoState}/>

     <Crear setListadoState={setListadoState}/>
     
    </aside>

    <footer className="footer" id="pedro-venegas">
      <p>Pedro Venegas ©2022</p>
      </footer>
  </div>
  );
}

export default App;
