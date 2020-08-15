import React from 'react';
import MainAdministration from './Main-Administration';
import '../../css/Administration.css';
import {
  Link,
  withRouter
} from "react-router-dom";

class Administration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task:false,
      client:false,
      project : false
    };
  }

  toggleTask  = () => {
    this.setState({task:!this.state.task});
  }
  toggleProject  = () => {
    this.setState({project:!this.state.project});
  }
  toggleClient  = () => {
    this.setState({client:!this.state.client});
  }
  render() {
        const linkTasks = (
               <div className="sub-menu">
                      <Link className="button btn-color1" to="/Administration/Task">Task</Link>
                      <Link className="button btn-color1" to="/Administration/new-Task">new Task</Link>
                      <Link className="button btn-color1" to="/Administration/set-Task">Assing Task to Project</Link>
                    </div>
        );
       const linkProject = (
               <div className="sub-menu">
                      <Link className="button btn-color1" to="/Administration/Project">Assign project to user</Link>
                      <Link className="button btn-color1" to="/Administration/new-Project">new Project</Link>
                      <Link className="button btn-color1" to="/Administration/set-Project">Assing Project to Customer</Link>
                    </div>
        );
       const linkClient = (
               <div className="sub-menu">
                      <Link className="button btn-color1" to="/Administration/Client">Client</Link>
                      <Link className="button btn-color1" to="/Administration/new-Client">new Client</Link>
                      <Link className="button btn-color1" to="/Administration/set-Client">set Client</Link>
                    </div>
        );
    return (
      <div className="administration">
          <div className="nav-vertical">
             <div className="menu-administration">
                      <div className="option">
                        <button onClick={this.toggleClient}>Client</button>
                        {this.state.client?linkClient:''}
                      </div>
                      <div className="option">
                        <button onClick={this.toggleProject}>Project</button>
                        {this.state.project?linkProject:''}
                      </div>
                      <div className="option">
                        <button onClick={this.toggleTask}>Task</button>
                        {this.state.task?linkTasks:''}
                      </div>


                  </div>
          </div>
          <div className="container-administration">
            <MainAdministration />
          </div>
      </div>

    );
  }
}
export default withRouter(Administration);