import React from 'react';
import SetProjectToUser from './SetProjectToUser';
import SetProjectToClient from './SetProjectToClient';
import SetTaskToProject from './SetTaskToProject';
import NewProject from './NewProject';
import NewTask from './NewTask';
import NewClient from './NewClient';


 import {
  Switch,
  Route,
  Redirect,
  withRouter

} from "react-router-dom";


 class MainAdministration extends React.Component {
    render(){
        const linkAdministration = (
              <div>
                <SetProjectToClient />
              </div>
        );
        const linkSendSignIn = (
              <Redirect to="/sign-in" />
        );



        return (
          <div>
            <Switch>

              <Route path="/Administration/set-Project">
                {(localStorage.getItem("sesion"))?linkAdministration:linkSendSignIn}
              </Route>
              <Route path="/Administration/New-Project">
                <NewProject />
              </Route>
              <Route path="/Administration/Set-Task">
                <SetTaskToProject />
              </Route>
              <Route path="/Administration/New-Task">
                <NewTask />
              </Route>
              <Route path="/Administration/set-client">
                <SetProjectToClient />
              </Route>
            <Route path="/Administration/new-client">
                <NewClient />
              </Route>
            </Switch>
          </div>
        );
    }
}
export default  withRouter(MainAdministration);