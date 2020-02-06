import React, { useState, Fragment, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;


    //state para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });

    //extraer nombre del proyecto
    const { nombre } = proyecto;

    //lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }


    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validar el proyecto
        if (nombre === ''){
            mostrarError();
            return;
        }

        //agregar el state
        agregarProyecto(proyecto);

        //reiniciar el form
        guardarProyecto({
           nombre:'' 
        })
    }

    return (

        <Fragment>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick= {() => mostrarFormulario()}
            >
                Nuevo proyecto
            </button>

            { formulario 
            
                ?
                    <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre del proyecto"
                            name="nombre"
                            vale={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar proyecto"
                        />
                    </form>
                : null
            }

            { errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}

        </Fragment>

     );
}
 
export default NuevoProyecto;