import React, {useContext} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";


const FormTarea = () => {

    //extraer si un proyecto esta seleccionado
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //si no hay proyectos seleccionado
    if (!proyecto) return null;

    //array desctructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;


    return (

        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>

        </div>
     );
}
 
export default FormTarea;