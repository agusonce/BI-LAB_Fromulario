import React,{Component} from 'react';
import '../css/SignIn.css';
 import {
  withRouter,
  Link
} from "react-router-dom";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '',
                  password :''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({formu:{user: event.target.value}});
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
                  console.log(data);
        fetch('/api/getUser',{
                            method: 'POST', // or 'PUT'
                            body: JSON.stringify(data), // data can be `string` or {object}!
                            headers:{
                              'Content-Type': 'application/json'
                            }})
        .then(res => res.json())
        .then(nombresjson => {
                              let sesion ={
                                "IdUser": nombresjson.recordsets[0][0].Id_Usuario,
                                "user": nombresjson.recordsets[0][0].Usuario
                              } 
                              console.log("caso1",nombresjson.recordsets[0][0]);
                              console.log("caso2",sesion);
                              localStorage.setItem('sesion',JSON.stringify(nombresjson.recordsets[0][0]));
                              console.log("caso3",localStorage);

                              this.props.history.push('/home');


                            });
      event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.BuscarUsuario} className="form">
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
        <Link className="button link" to="/sign-up">registrarse</Link>
      </form>
    );
  }
}
export default withRouter(SignIn);