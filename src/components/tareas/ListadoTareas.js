import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from "../../context/proyectos/proyectoContext";



const ListadoTareas = () => {

    //extraer proyectos del state principal
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //si no hay proyectos seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //array desctructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [];

    //eliminar un Proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }


    return (
        <Fragment> 
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button 
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >
                Eliminar proyecto &times;
            </button>

        </Fragment>
     );
}
 
export default ListadoTareas;