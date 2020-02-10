import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

    //extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;


    useEffect(()=> {
        obtenerProyectos();
    }, []);

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
            {proyectos.map(proyecto => (
                <Proyecto
                    key= {proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;