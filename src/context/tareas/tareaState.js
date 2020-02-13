import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import uuid from 'uuid';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA,
} from '../../types';

const TareaState = props => {
    const initialState = {
      tareas: [
        { id:1 ,nombre: "elegir plataforma x", estado: true, proyectoId: 1 },
        { id:2 ,nombre: "elegir paleta de colores", estado: false, proyectoId: 2 },
        { id:3 ,nombre: "elegir plataformas de pago facil", estado: false, proyectoId: 3 },
        { id:4 ,nombre: "elegir hosting premium", estado: true, proyectoId: 4 },
        { id:5 ,nombre: "elegir plataforma z", estado: true, proyectoId: 1 },
        { id:6 ,nombre: "elegir colores", estado: false, proyectoId: 2 },
        { id:7 ,nombre: "elegir plataformas de pago premium", estado: false, proyectoId: 3 },
        { id:8 ,nombre: "elegir hosting", estado: true, proyectoId: 4 },
        { id:9 ,nombre: "elegir plataforma z", estado: true, proyectoId: 1 },
        { id:10 ,nombre: "elegir escala de colores ", estado: false, proyectoId: 2 },
        { id:11 ,nombre: "elegir plataformas de pago", estado: false, proyectoId: 3 },
        { id:12 ,nombre: "elegir hosting free", estado: true, proyectoId: 4 },
      ],
      tareasproyecto: null,
      errortarea: false,
      tareaseleccionada: null,
    };

    //crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    
    //agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuid.v4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //valida y muestra un error de ser necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar las tareas por su id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //actualizar tareas (guardar cambios)
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload : tarea
        })
    }

    //Elimina la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;