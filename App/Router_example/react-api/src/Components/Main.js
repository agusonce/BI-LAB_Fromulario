import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
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
              <SignIn />
        );
        const linkSignUp = (
              <SignUp />
        );

        const linkSendHome = (
              <Redirect to="/home" />
        );

        const linkHome = (
              <Home />
        );


        return (
          <Switch>
           
            <Route path="/home">
              {(localStorage.getItem("sesion"))?linkHome:linkSignIn}
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
          </Switch>
        );
    }
}
export default  withRouter(Main);