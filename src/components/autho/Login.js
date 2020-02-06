import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    //state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    } 

    const onSubmit = e => {
        e.preventDefault();

        //validar el formulario


        // pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">

                <h1> Iniciar sesión</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar sesión"
                        />
                    </div>

                </form>

                < Link to = {'/nueva-cuenta'} className="enlace-cuenta" id="enlace-style">
                    Registrarse
                </Link>

            </div>
        </div>
     );
}
 
export default Login;