import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

  //const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);
  useEffect(() => {

    console.log("Se ha cargado el componente")
    conseguirPeliculas();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const conseguirPeliculas = () => {

    let peliculas = JSON.parse(localStorage.getItem("pelis")) || [];

    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPeli = (id) => {

    //sacar pel'iculas almacenadas

    let pelis_almacenadas = conseguirPeliculas();

    //filtrar peliculas para que elimine del array la que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))


    //actualizar estado del listado (listadoState)
    setListadoState(nuevo_array_pelis);

    //actualizar datos en el localstorage

    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));

  }

  return (
    <>
      {listadoState.length > 0 ?
        listadoState.map(peli => {

          return (

            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button className="edit" onClick={() => {
                setEditar(peli.id)
              }}>Editar</button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
              {/*aparece formulario para editar */}

              {editar === peli.id && (

                <Editar peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />

              )}
            </article>
          );
        })

        : <h2> ¡Hola! No hay películas disponibles por ahora {":("}</h2>
      }

    </>
  )
}
