import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar: ";

    const guardarEdicion = (e, id) => {

        e.preventDefault();

        //conseguir target del evento(formulario)

        let target = e.target;

        //buscar indice de objeto a actualizar

        const pelis_almacenadas = conseguirPeliculas();

        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //crear objeto con ese indice

        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };

        //actualizar el elemento con el nuevo indice editadpo
        pelis_almacenadas[indice] = peli_actualizada;

        //guardar nuevo array de objeto en localStorage

        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        //actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);
        
    }
  return (
    <div className='edit_form'>

        <h3 className='title'>{titulo_componente}{peli.titulo}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input 
                type="text"
                name='titulo'
                className='titulo_editado'
                defaultValue={peli.titulo}/>

            <textarea 
                name='descripcion'
                defaultValue={peli.descripcion}
                className='descripcion_editada'/>

            <input 
                type="submit"
                className="editar"
                value="Aceptar"/>

        </form>
    </div>
  )
}
