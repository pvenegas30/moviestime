import React, { useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {

  const [busqueda, setBusqueda] = useState("");

  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {

    //crear estado y actualizar

    setBusqueda(e.target.value);

    //Filtrar para buscar coincidencias
    
      let pelis_encontradas= listadoState.filter(peli => {

        return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
      });

      if (busqueda.length <= 1 || pelis_encontradas <= 0) {

        pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
        setNoEncontrado(true);

      }else{

        setNoEncontrado(false);

      }

    //Actualizar estado del Listado principal con lo que se ha filtrado

      setListadoState(pelis_encontradas);

  };

  return (
    <>
      <div className="search">

        <form>

          <h3 className="title">Buscar: {busqueda}</h3>
          {(noEncontrado === true && busqueda.length > 1) &&(

          <span className='no-encontrado'>No se ha encontrado ninguna película {":("}</span>

          )}

          <input
            type="text"
            id='search_field'
            name='busqueda'
            autoComplete='off'
            value={busqueda}
            onChange={buscarPeli} 
            placeholder="Buscar película..."/>

        </form>
      </div>

    </>
  )
}
