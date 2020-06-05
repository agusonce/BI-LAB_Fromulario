 import React from 'react';
 import '../css/Menu.css';
 import {
  Link,
  withRouter
} from "react-router-dom";
 class Menu extends React.Component {

  
  cerrarSesion = () => {
    console.log("presiono");
    localStorage.removeItem('sesion');
   this.props.history.push('/sign-in');
  }
  render(){

     const linkloguearse =(
    
              <div>
                  
              </div>

              );
  
      const linklogueado = (
              <div>
                  <div className="actions">
                    <Link className="button btn-blue" to="/home">Home</Link>
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