import React,{Component} from 'react';
import Selec from './Selec';
import '../css/form.css';
import {
  Link,
  withRouter
} from "react-router-dom";


class FormLoadHour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : '',
                  fecha : '',
                  apellido :'',
                  Tareas:[],
                  Tarea:''
				        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});

  }

  handleChangeFecha = (event) => {
  this.setState({fecha: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);

    event.preventDefault();
  }

  toggleShowTarea = (datachild) => {
  	console.log(datachild);
  	this.setState({Tarea: datachild})

  }
  componentDidMount(){

        fetch('/api/getTasks',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {
                              console.log("caso1",nombresjson.recordsets[0][0]);
                              console.log("caso1",nombresjson.recordsets[0]);
                              this.setState({Tareas : nombresjson.recordsets[0]})
                              console.log("caso1",this.state.Tareas);

                            });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">


        <label>
          <p>Fecha : {this.state.fecha}</p>
          <input  type="date" value={this.state.fecha} onChange={this.handleChangeFecha} />
          <p className="ms-error">*ingrese un valor valido</p>
        </label>

        <label>
          <p>proyecto</p>
            <Selec  
                    options={this.state.Tareas} 
                    onChangea={this.toggleShowTarea} 
            />
          <p className="ms-error">*Seleccione un valor</p>
        </label>
        
        <label>
         <p> Descripcion </p>
          <input name="nombre" type="text" value={this.state.value} onChange={this.handleChange} />
          <p className="ms-error">*Ingrese una descripcion de realizado</p>
        </label>


        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default  withRouter(FormLoadHour);