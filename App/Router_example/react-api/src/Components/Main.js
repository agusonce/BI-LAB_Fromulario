import React from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import Ms from './Ms';
import Administration from './administration/Administration';
import FormLoadHour from './FormLoadHour';

import '../css/Main.css';
 import {
  Switch,
  Route,
  Redirect,
  withRouter

} from "react-router-dom";
 class Main extends React.Component {
    render(){
        const linkSignIn = (
              <LogIn />
        );
        const linkSignUp = (
              <SignUp />
        );
        const linkSendSignIn = (
              <Redirect to="/sign-in" />
        );

        const linkSendHome = (
              <Redirect to="/home" />
        );

        const linkHome = (
              <Home />
        );
        const linkLoadHour = (
              <FormLoadHour />
        );
        const linkAdministration = (
              <Administration />
        );


        return (
          <Switch>
            <Route
                exact
                path="/"
                render={() => {
                    return (
                      (localStorage.getItem("sesion"))?
                      <Redirect to="/home" /> :
                      <Redirect to="/sign-in" /> 
                    )
                }}
              />
            <Route path="/home">
              {(localStorage.getItem("sesion"))?linkHome:linkSendSignIn}
            </Route>
            <Route path="/sign-in">
                  <div className="login">
                   {(localStorage.getItem("sesion"))?linkSendHome:linkSignIn}
                  </div>
            </Route>
            <Route path="/sign-up">
                <div className="login">
                   {(localStorage.getItem("sesion"))?linkSendHome:linkSignUp}
                  </div>
            </Route>
            <Route path="/Load-hours">
              <div className="login">
                 {(localStorage.getItem("sesion"))?linkLoadHour:linkSignUp}
              </div>
            </Route>
            <Route path="/Administration">
              <div className="login">
                 {(localStorage.getItem("sesion"))?linkAdministration:linkSignUp}
              </div>
            </Route>
            <Route path="/Ms-Error">
                <Ms key="error" message='error' />
            </Route>
            <Route path="/Ms-succes">
                <Ms key="succes" message='succes' />
            </Route>
            
          </Switch>
        );
    }
}
export default  withRouter(Main);