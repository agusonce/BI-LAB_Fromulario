import React from 'react';
import '../../css/SetProjectToClient.css';
import Selec from '../Selec';
import ListAsign from './ListAsign';

import {
  withRouter
} from "react-router-dom";

// FormLoadHour: variable para saber a si hay que mostrar el ms de 'complete todos los campos '
class SetProjectToClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Descripcion : '',fecha : '',apellido :'',Hora :0,
                  Proyecto : '1',Proyectos: [],
                  Clientes: [],Cliente: '1',
                  PressSubmit: false,
                  ListProjectClient : []

                };
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  getAllClients(){
        fetch('/api/getClient',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {   this.setState({Clientes : nombresjson.recordsets[0]})});
  }
  getAllProyects(Client){
     //PROYECTOS
        fetch('/api/getProjectNotSetClient?Client='+Client,{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {   this.setState({Proyectos : nombresjson.recordsets[0]})});
  }
  handleSubmit(event) {
    console.log(this.state.Cliente);
    console.log(this.state.Proyecto);
    let data = {Cliente : this.state.Cliente , Proyecto : this.state.Proyecto}
    this.sendDataForm(data);
    event.preventDefault();
  }

  sendDataForm = (Data) =>{
    fetch('/api/setProjectClient',{
                        method: 'POST', 
                        body: JSON.stringify(Data), 
                        headers:{
                          'Content-Type': 'application/json'
                        }})
    .then(res => res.json()).then(nombresjson => {
        this.getAllProjectClient();
        this.setState({Cliente : '1'});
        this.setState({Proyecto : '1'});
        this.setState({Clientes :[]});
        this.setState({Proyectos : []});
        this.getAllProyects('1');
        this.getAllClients();
    });

  }
  toggleShowProyecto = (datachild) => {this.setState({Proyecto: datachild});}
  toggleShowCliente = (datachild) => {
    this.setState({Cliente: datachild});
      this.getAllProyects(datachild);
    
  }
  componentDidMount(){
     //PROYECTOS
      this.getAllProyects('1');
      this.getAllClients();

      this.getAllProjectClient();
      
   }

  getAllProjectClient(){
     //PROYECTOS
        fetch('/api/getListProjectClient',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {  
         this.setState({ListProjectClient : nombresjson.recordsets[0]});
        console.log( nombresjson.recordsets[0]);

       });
  }

  render() {
        const ErrorProyecto = (
          <p className="ms-error">*Seleccione un Proyecto</p>
        )


        const Header = [
          {'value':'Client'},
           {'value':'Project'}
        ];
        const ErrorCliente = (
          <p className="ms-error">*Seleccione un Cliente</p>
        )


        return (
          <div className="setProjectToClient">
                  <label>Asignacion de Proyecto </label>
                 <form  className="form">

                    <label>
                      <p>Cliente :</p>
                      <Selec  
                              options={this.state.Clientes} 
                              onChangea={this.toggleShowCliente} 
                      />
                        {(this.state.Cliente==='1')&&this.state.PressSubmit?ErrorCliente:''}
                    </label>
                    <label>
                    <p>Proyecto :</p>
                      <Selec  
                              options={this.state.Proyectos} 
                              onChangea={this.toggleShowProyecto} 
                      />
                      {(this.state.Proyecto==='1')&&this.state.PressSubmit?ErrorProyecto:''}
                    </label>
                    <button className="button" disabled={this.state.PressSubmit||(this.state.Cliente==='1'||this.state.Proyecto==='1')?true:false} onClick={this.handleSubmit} >Asignar </button>

                </form>
                < ListAsign Headers={Header} body={this.state.ListProjectClient} />
          </div>
        );
  }
}
export default  withRouter(SetProjectToClient);