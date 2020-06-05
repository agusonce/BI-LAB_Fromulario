 import React,{Component} from 'react';
 import Search from './Search.js';
 import '../css/Menu.css';
 import {
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
 class Menu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  cerrarSesion = () => {
    console.log("presiono");
    localStorage.removeItem('sesion');
   this.props.history.push('/posts/');
  }
  render(){

     const linkloguearse =(
    
              <div>
                  <div className="actions">
                     <Link className="button btn-blue" to="/login">login</Link>
                  </div>
                  <div className="actions">
                     <Link className="button btn-blue" to="/home">registrarse</Link>

                  </div>
              </div>

              );
  
      const linklogueado = (
              <div>
                  <div className="actions">
                    <Link className="button btn-blue" to="/">Home</Link>
                  </div>
                  <div className="actions">
                    <button className="button btn-blue" onClick={this.cerrarSesion}>cerrar Sesion</button>
                  </div>

              </div>

        );
        return (
          <div className="container">
            <div className="subcontainer">
              <div className="logo">
               {this.props.title}
              </div>
                  {(localStorage.getItem("sesion"))?linklogueado:linkloguearse} 
              </div>
          </div>
        );}
    }

    export default withRouter(Menu);