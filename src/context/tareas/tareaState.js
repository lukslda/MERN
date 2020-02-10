import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO 
} from '../../types';

const TareaState = props => {
    const initialState = {
      tareas: [
        { nombre: "elegir plataforma", estado: true, proyectoId: 1 },
        { nombre: "elegir colores", estado: false, proyectoId: 2 },
        { nombre: "elegir plataformas de pago", estado: false, proyectoId: 3 },
        { nombre: "elegir hosting", estado: true, proyectoId: 4 },
        { nombre: "elegir plataforma", estado: true, proyectoId: 1 },
        { nombre: "elegir colores", estado: false, proyectoId: 2 },
        { nombre: "elegir plataformas de pago", estado: false, proyectoId: 3 },
        { nombre: "elegir hosting", estado: true, proyectoId: 4 },
        { nombre: "elegir plataforma", estado: true, proyectoId: 1 },
        { nombre: "elegir colores", estado: false, proyectoId: 2 },
        { nombre: "elegir plataformas de pago", estado: false, proyectoId: 3 },
        { nombre: "elegir hosting", estado: true, proyectoId: 4 },
      ]
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
    
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                obtenerTareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;