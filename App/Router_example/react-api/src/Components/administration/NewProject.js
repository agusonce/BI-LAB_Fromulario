import React from 'react';
import '../../css/NewProject.css';
import ListRows from './ListRows';

import {
  withRouter
} from "react-router-dom";

// FormLoadHour: variable para saber a si hay que mostrar el ms de 'complete todos los campos '
class NewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  Projects: [],
                  Project: '',
                  PressSubmit: false
				        };
    this.handleChangeProject = this.handleChangeProject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  sendDataForm = (project) =>{
      fetch('/api/setProject',{
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(project), // data can be `string` or {object}!
                        headers:{
                          'Content-Type': 'application/json'
                        }})
    .then(res => res.json()).then(nombresjson => {
       // this.props.history.push('/Ms-Succes');
       this.getAllProyects();
      this.setState({PressSubmit: false});
      this.setState({Project : ''});

        console.log("susses",nombresjson);
    });

  }
 handleSubmit(event) {
  console.log(this.state.Project);
  if (this.state.Project.trim()=='') {
  }else{
    this.setState({PressSubmit: true});
    let data = {project : this.state.Project}
    this.sendDataForm(data);
    
  }
  event.preventDefault();
 }

 handleChangeProject(event){
    this.setState({Project: event.target.value});
 }

  getAllProyects(){
     //Projects
        fetch('/api/ListAllProject',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {   this.setState({Projects : nombresjson.recordsets[0]})});
  }
  componentDidMount(){
     //Projects
      this.getAllProyects();
      console.log("no me ves?")
   }
  render() {
  const Header = [
          {'value':'List Projects'}
        ];


        const ErrorProyecto = (
          <p className="ms-error">*Ingrese un Proyecto</p>
        )

        return (
          <div className="newProject">
                  <label>New Peoject </label>
                 <form onSubmit={this.handleSubmit} className="form">

                    <label>
                      <p>Name Project :</p>
                      <input type="text" 
                              value={this.state.Project} 
                              onChange={this.handleChangeProject}
                              placeholder="Set project name"
                      />
                        {(this.state.Cliente==='1')&&this.state.PressSubmit?ErrorProyecto:''}
                    </label>
                    <button className="button" disabled={this.state.PressSubmit||this.state.Project.trim()==''?true:false} onClick={this.handleSubmit} >Cargar </button>
                
                </form>

                <ListRows key={this.state.Projects} Headers={Header} body={this.state.Projects}/>
          </div>
        );
  }
}
export default  withRouter(NewProject);