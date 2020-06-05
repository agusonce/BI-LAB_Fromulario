import React,{Component} from 'react';
import '../css/SignUp.css';
 import {
  withRouter,
  Link
} from "react-router-dom";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '',
                  password :'',
                  nombre :'',
                  apellido :'',
                  mail :'',

                };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({formu:{user: event.target.value}});
  }

  ChangeMail = (event) => {
    this.setState({mail: event.target.value});
  }
  ChangeFirstName = (event) => {
    this.setState({nombre: event.target.value});
  }
  ChangeLastname = (event) => {
    this.setState({apellido: event.target.value});
  }
  ChangeUser = (event) => {
    this.setState({user: event.target.value});
  }

  ChangePass = (event) => {
  this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);
    // localStorage.setItem('session',JSON.stringify(token));
    // console.log(localStorage);
    event.preventDefault();
  }

  BuscarUsuario = (event) =>{
    

      let data = {user:this.state.user
                  ,password: this.state.password};
        fetch('/api/getUser',{
                            method: 'POST', // or 'PUT'
                            body: JSON.stringify(data), // data can be `string` or {object}!
                            headers:{
                              'Content-Type': 'application/json'
                            }})
        .then(res => res.json())
        .then(nombresjson => {
                              let sesion ={
                                "IdUser": nombresjson.recordsets[0][0].ID_USUARIOS,
                                "user": nombresjson.recordsets[0][0].USUARIO
                              } 
                              console.log("caso2",sesion);
                              localStorage.setItem('sesion',JSON.stringify(sesion));
                              this.props.history.push('/home');

                            });
      event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.BuscarUsuario} className="form">
        <label>
          <p> Nombre </p>
            <input type="text" value={this.state.nombre} onChange={this.ChangeUser} />
          <p className="ms-error">*comprete el formulario</p>
        </label>
        <label>
          <p> Apellido </p>
            <input type="text" value={this.state.apellido} onChange={this.ChangeUser} />
          <p className="ms-error">*comprete el formulario</p>
        </label>
        <label>
          <p> correo electronico </p>
            <input type="text" value={this.state.mail} onChange={this.ChangeUser} />
          <p className="ms-error">*comprete el formulario</p>
        </label>
        <label>
          <p> Usuario </p>
            <input type="text" value={this.state.user} onChange={this.ChangeUser} />
          <p className="ms-error">*comprete el formulario</p>
        </label>

        <label>
          <p>Contraseña</p>
          <input type="text" value={this.state.password} onChange={this.ChangePass} />
          <p className="ms-error">*ingrese un valor valido</p>
        </label>
            
        <input type="submit" value="Submit" />
                     <Link className="button" to="/sign-in">iniciar sesion</Link>

      </form>
    );
  }
}
export default  withRouter(SignUp);