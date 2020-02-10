import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/autho/Login';
import NuevaCuenta from './components/autho/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from "./context/tareas/tareaState";


function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          {/*todo lo que se encuentre en el router es lo que se van a ver en todas las paginas*/}
          <Switch>
            {/* todo lo que este adentro del switch seran las diferenteas paginas */}
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact path="/proyectos" component={Proyectos} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;