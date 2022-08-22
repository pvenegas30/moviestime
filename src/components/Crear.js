import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

  const tituloComponente = "Anadir película";

  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: ""
  })

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = e => {

    e.preventDefault();

    //conseguir datos formulario

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //crear objeto de pelicula a guardar

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion

    };

    //Guardar estado

    setPeliState(peli);

    //Actualizar estado

    setListadoState(elementos => {

      return [...elementos, peli];

    });

    //Guardar en el almacenamiento local

    GuardarEnStorage("pelis", peli);


  }

  return (
    <>

      <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        {(titulo && descripcion) && "Has creado la película: " + peliState.titulo}

        <form onSubmit={conseguirDatosForm}>
          <input
            type="text"
            id='titulo'
            name='titulo'
            placeholder="Título" />
          <textarea
            id='descripcion'
            name='descripcion'
            placeholder="Descripción"></textarea>
          <input
            type="submit"
            id='save'
            value="Guardar" />
        </form>
      </div>

    </>
  )
}
