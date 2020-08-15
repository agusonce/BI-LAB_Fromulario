import React from 'react';
import SetProjectToUser from './SetProjectToUser';
import SetTaskToProject from './SetTaskToProject';
import NewProject from './NewProject';
import NewTask from './NewTask';


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
                <SetProjectToUser />
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
              
            </Switch>
          </div>
        );
    }
}
export default  withRouter(MainAdministration);