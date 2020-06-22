 import React from 'react';
 import '../css/Menu.css';
 import Logo from '../img/BILAB2.png';
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
              <div className="nav">
                  <div className="actions">
                    <Link className="button btn-color1" to="/home">Home</Link>
                  </div>
                  <div className="actions">
                    <Link className="button btn-color1" to="/Load-hours">Load Hour</Link>
                  </div>
                  <div className="actions">
                    <button className="button btn-color1" onClick={this.cerrarSesion}>Sign Out</button>
                  </div>

              </div>

        );

        return (
          <div className="container">
            <div className="subcontainer">
              <div className="logo">
                <img src={Logo}  />
               
              </div>

              {(localStorage.getItem("sesion"))?linklogueado:linkloguearse} 

              </div>
          </div>
        );}
    }

    export default withRouter(Menu);