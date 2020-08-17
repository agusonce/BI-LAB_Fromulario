import React from 'react';
import '../../css/SetTaskToProject.css';
import Selec from '../Selec';
import ListAsign from './ListAsign';

import {
  withRouter
} from "react-router-dom";

// FormLoadHour: variable para saber a si hay que mostrar el ms de 'complete todos los campos '
class SetTaskToProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Descripcion : '',fecha : '',apellido :'',Hora :0,
                  Proyecto : '1',Proyectos: [],
                  
                  PressSubmit: false,
                  Tasks : [],
                  Task :'1',
                  ListAllTaskProject : []

				        };
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  getAllProyecto(){
        fetch('/api/getAllProject',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => { 
          this.setState({Proyectos : nombresjson.recordsets[0]});
          console.log("succes uno:", nombresjson.recordsets[0]);

        });
  }
  getAllTasks(Project){
     //PROYECTOS
        fetch('/api/getTaskNotSetProject?Project='+Project,{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {   this.setState({Tasks : nombresjson.recordsets[0]})});
  }
  handleSubmit(event) {
    if (this.state.Proyecto==='1'||this.state.Task==='1') {
      console.log("if");
      this.setState({PressSubmit:true});
    }else{
        console.log(this.state.Proyecto);
        let data = {Task : this.state.Task , Project : this.state.Proyecto};
        console.log(data);
        
        this.sendDataForm(data);
    }

    event.preventDefault();
  }

  sendDataForm = (Data) =>{
    fetch('/api/setTaskProject',{
                        method: 'POST', 
                        body: JSON.stringify(Data), 
                        headers:{
                          'Content-Type': 'application/json'
                        }})
    .then(res => res.json()).then(nombresjson => {

      this.setState({Proyecto: '1'});
      this.setState({Task: '1'});
      this.setState({Proyectos : []});
      this.getAllProyecto();
      this.setState({Tasks : []});
      this.getAllTasks('1');
      this.getListAllTasksProject();
      console.log("susses",nombresjson);

    });

  }
  toggleShowTask = (datachild) => {
    this.setState({Task: datachild});
    console.log(datachild);

  }
  toggleShowProyecto = (datachild) => {
    this.setState({Proyecto: datachild});
      this.getAllTasks(datachild);
    
  }
  componentDidMount(){
     //PROYECTOS
      this.getAllTasks('1');
      this.getAllProyecto();

      this.getListAllTasksProject();
      
   }

  getListAllTasksProject(){
     //PROYECTOS
        fetch('/api/getListAllTasksProject',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => { 
          this.setState({ListAllTaskProject : nombresjson.recordsets[0]});
      });
  }

  render() {
        const ErrorProyecto = (
          <p className="ms-error">*Seleccione un Proyecto</p>
        )


        const Header = [
          {'value':'Project'},
           {'value':'Task'}
        ];
        const ErrorTask = (
          <p className="ms-error">*Seleccione una Tarea</p>
        )


        return (
          <div className="setTaskToProject">
                  <label>Asignacion de Tarea </label>
                 <form className="form">

                    <label>
                      <p>Proyectos :</p>
                      <Selec  
                              options={this.state.Proyectos} 
                              onChangea={this.toggleShowProyecto} 
                      />
                        {(this.state.Proyecto==='1')&&this.state.PressSubmit?ErrorProyecto:''}
                    </label>
                    <label>
                    <p>Tareas :</p>
                      <Selec  
                              options={this.state.Tasks} 
                              onChangea={this.toggleShowTask} 
                      />
                      {(this.state.Task==='1')&&this.state.PressSubmit?ErrorTask:''}
                    </label>
                    <button className="button" disabled={this.state.PressSubmit||(this.state.Task==='1'||this.state.Proyecto==='1')?true:false} onClick={this.handleSubmit} >Enviar </button>
                </form>

                < ListAsign Headers={Header} body={this.state.ListAllTaskProject} />
          </div>
        );
  }
}
export default  withRouter(SetTaskToProject);