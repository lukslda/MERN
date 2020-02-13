import React, { Fragment, useContext } from 'react';
import tareaContext from "../../context/tareas/tareaContext";
import proyectoContext from '../../context/proyectos/proyectoContext';


const Tarea = ({tarea}) => {

    //obtener la funcion agregarTarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual} = tareasContext;

    //extrae un proyecto si esta activo(seleccionado)
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //extraer el proyecto
    const [proyectoActual] = proyecto;

    // funcion que se ejecuta cuando el usuario presiona el btn de elimar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    //funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    //agrega una tarea actual cuando el usuario desea editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }


    return ( 
        <Fragment>
                
            <li className="tarea sombra">
                <p>{tarea.nombre}</p>
                
                <div className="estado">
                    {tarea.estado 
                        ? 
                            <button 
                                className="completo" 
                                type="button"
                                onClick={() => cambiarEstado(tarea)}
                            >
                                    Completo
                            </button> 
                        :    
                            <button 
                                className="incompleto" 
                                type="button"
                                onClick={() => cambiarEstado(tarea)}
                            >
                                    Incompleto
                            </button>
                    }
                </div>

                <div className="acciones">
                    <button
                        className="btn btn-primario"
                        type="button"
                        onClick={() => seleccionarTarea(tarea)}
                    >
                        Editar
                    </button>
                        
                    <button
                        className="btn btn-secundario"
                        type="button"
                        onClick={() => tareaEliminar(tarea.id)}
                    >
                        Borrar
                    </button>

                </div>
            </li>
        </Fragment>
     );
}
 
export default Tarea;