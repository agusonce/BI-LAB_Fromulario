import React,{Component} from 'react';
import Selec from './Selec';
import '../css/form.css';
import {
  Link,
  withRouter
} from "react-router-dom";

// FormLoadHour: variable para saber a si hay que mostrar el ms de 'complete todos los campos '
class FormLoadHour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Descripcion : '',fecha : '',apellido :'',Hora :0,
                  Tareas:[],Tarea:'1',Cliente : '1',
                  Proyecto : '1',Proyectos: [],
                  StadoEnvio: false,
                  Clientes: [],FormLoadHour: false,
                  PressSubmit: false
				        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mostrar = this.mostrar.bind(this);
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleChangeFecha = (event) => {
  this.setState({fecha: event.target.value});
  }
  toggleShowTarea = (datachild) => {
  	this.setState({Tarea: datachild})
  }
  toggleShowProyecto = (datachild) => {
    this.setState({Proyecto: datachild});
    this.getTasks(datachild);
    this.setState({Tarea: 1});
  }
  toggleShowCliente = (datachild) => {
    this.setState({Cliente: datachild});
    this.getProyects(datachild);
    this.getTasks(this.state.Proyecto);
    this.setState({Proyecto: 1});
    this.setState({Tarea: 1});
  }
  handleChangeDescripcion = (event) => {
    this.setState({Descripcion: event.target.value})
  }
  handleChangeHora = (event) => {
    this.setState({Hora: parseInt(event.target.value) })
  }
  sendDataForm = (Horas) =>{
    fetch('/api/setHours',{
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(Horas), // data can be `string` or {object}!
                        headers:{
                          'Content-Type': 'application/json'
                        }})
    .then(res => res.json()).then(nombresjson => {
        this.props.history.push('/Ms-Succes');
        console.log("susses",nombresjson);
    });

  }
  mostrar(event){
    console.log("Cliente:",this.state.Cliente);
    console.log("Proyecto:",this.state.Proyecto);
    console.log("Tarea:",this.state.Tarea);
    event.preventDefault();
  }
  handleSubmit(event) {
    if (this.state.Cliente==='1'||this.state.Hora===0||this.state.Descripcion===''||this.state.Proyecto==='1'||this.state.Tarea==='1'||this.state.fecha==='') {
      console.log("if");
      this.setState({PressSubmit:true});
      event.preventDefault();
    }else{
      let Horas = {
          User : JSON.parse(localStorage.getItem("sesion")).Id_Usuario,
          Fecha : this.state.fecha ,
          Descripcion : this.state.Descripcion,
          Proyecto : this.state.Proyecto ,
          Cliente :this.state.Cliente ,
          Tarea : this.state.Tarea,
          Hora : this.state.Hora
      }
      console.log("else",Horas);
      this.setState({PressSubmit:false});
      this.sendDataForm(Horas);
      this.setState({StadoEnvio:true});
      event.preventDefault();

    }
    this.setState({FormLoadHour:true});

  }


  getProyects(value){
     //PROYECTOS
     console.log(value);
        fetch('/api/getProject?Cliente='+value+'',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {   this.setState({Proyectos : nombresjson.recordsets[0]})});
  }

    getTasks(value){
     console.log(value);
       //TAREAS
        fetch('/api/getTasks?Project='+value+'',{method: 'GET'}).then(res => res.json())
        .then(nombresjson => {   this.setState({Tareas : nombresjson.recordsets[0]})});  
  }

  componentDidMount(){
     //PROYECTOS
      this.getProyects(this.state.Cliente);
   
    //CLIENTES
        fetch('/api/getClient',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {   this.setState({Clientes : nombresjson.recordsets[0]})});
  //TAREAS
      this.getTasks(this.state.Proyecto);
        
  }

  render() {
    const ErrorFormSubmit = (
        <p className="ms-error">*Complete Todos Los Campos</p>
    )
    const ErrorTarea = (
        <p className="ms-error">*Seleccione una Tarea</p>
    )
    const ErrorProyecto = (
        <p className="ms-error">*Seleccione un Proyecto</p>
    )
    const ErrorCliente = (
        <p className="ms-error">*Seleccione un Cliente</p>
    )

    const ErrorDescripccion = (
        <p className="ms-error">*Describa lo que hizo en el dia</p>
    )
    const ErrorFecha = (
        <p className="ms-error">*Ingrese una fecha</p>
    )
    const ErrorHora = (
        <p className="ms-error">*Ingrese un Horario valido mayor a 0 y menor a 9</p>
    )



    return (
      <form onSubmit={this.handleSubmit} className="form">


        <label>
          <p>Fecha : {this.state.fecha}</p>
          <input  type="date" value={this.state.fecha} onChange={this.handleChangeFecha} />
          {(this.state.fecha==='')&&this.state.PressSubmit?ErrorFecha:''}

        </label>

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

        <label>
          <p>Tareas :</p>
            <Selec  
                    options={this.state.Tareas} 
                    onChangea={this.toggleShowTarea} 
            />
            {(this.state.Tarea==='1')&&this.state.PressSubmit?ErrorTarea:''}

        </label>


        <label>
         <p> Descripcion :</p>
          <textarea name="Descripcion"  
                    value={this.state.Descripcion} onChange={this.handleChangeDescripcion} />
          {(this.state.Descripcion==='')&&this.state.PressSubmit?ErrorDescripccion:''}
        </label>

        <label>
          <p>Hora : {this.state.Hora}</p>
          <input  type="Number" value={this.state.Hora} onChange={this.handleChangeHora} />
          {((this.state.Hora>8)||(this.state.Hora<0)||(this.state.Hora===0))&&this.state.PressSubmit?ErrorHora:''}

        </label>

        <input type="submit" value="Cargar" />


            
      </form>
    );
  }
}
export default  withRouter(FormLoadHour);