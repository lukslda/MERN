import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import authContext from '../../context/autenticacion/authContext';


const Login = (props) => {

    // extraer los valores del const 
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const AuthContext = useContext(authContext);
    const { iniciarSesion, mensaje, autenticado } = AuthContext;

    // En caso de que el usuario o el password no exista 
    useEffect(() => {
        if (autenticado) {
            props.history.push('/proyectos');
        }
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    }, [mensaje, autenticado, props.history]);

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
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // pasarlo al action
        iniciarSesion({ email, password});
    }

    return ( 
        <div className="form-usuario">
            {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> : null}
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

                < Link to = {'/nueva-cuenta'} className="enlace-cuenta" id="enlace-style" >
                    Registrarse
                </Link>

            </div>
        </div>
     );
}
 
export default Login;