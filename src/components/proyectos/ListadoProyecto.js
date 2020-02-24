import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {

    //extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    useEffect(()=> {

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    //revisar si el proyecto tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos para mostrar.</p>;


    /* Error --- ESTE ERROR SE DEBE A QUE NUNCA DEBE HABER UN RETURN ANTES DEL USEEFFECT
    Failed to compile
    ./src/components/proyectos/ListadoProyecto.js
    Line 15:5:  React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?  react-hooks/rules-of-hooks

    Search for the keywords to learn more about each error.
    */ 

    return ( 
        <ul className="listado-proyectos">

            {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> :null}

            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key= {proyecto._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;