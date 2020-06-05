 import React,{Component} from 'react';
 import Search from './Search.js';
 import '../css/Menu.css';
 import {
  Link
} from "react-router-dom";
 class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render(){
     const linkLogin = ()=>{
      return (
              <div>
                  <div className="actions">
                     <Link className="button btn-blue" to="/login">login</Link>
                  </div>
                  <div className="actions">
                     <Link className="button btn-blue" to="/loadHour">singin</Link>
                  </div>
              </div>

              );
    };
      const linkloguearse = (
              <div>
                  <div className="actions">
                    <Link className="button btn-blue" to="/">Home</Link>
                  </div>
                  <div className="actions">
                     <Link className="button btn-blue" to="/logoff">sclose session</Link>
                  </div>

              </div>

        );
        return (
          <div className="container">
            <div className="subcontainer">

              <div className="logo">
               {this.props.title}
              </div>
                  {(localStorage.getItem("sesion"))?linkloguearse:linkLogin} 
              </div>
          </div>
        );}
    }

    export default Menu;