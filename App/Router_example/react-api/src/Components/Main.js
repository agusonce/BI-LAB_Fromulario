import React from 'react';
import Login from './Login';
import '../css/Main.css';
 import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
 class Main extends React.Component {
  constructor(props) {
    super(props);
  }


    render(){
      const linkLoguearse = (
              <Login />
        );

      const linklogueado = (
              <Redirect to="home" />
        );



        return (
          <Switch>
            <Route path="/home">
              home
            </Route>
            <Route path="/logoff">asd
              {(localStorage.getItem("sesion"))}
            </Route>
            <Route path="/login">
                  <div className="login">
                    {(localStorage.getItem("sesion"))?linklogueado:linkLoguearse}
                  </div>
            </Route>
            <Route path="/loadHour">
              cargar hora
            </Route>
          </Switch>
        );
    }
}
    export default Main;