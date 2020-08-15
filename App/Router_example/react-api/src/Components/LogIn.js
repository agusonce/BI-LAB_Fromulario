import React from 'react';
import '../css/LogIn.css';
 import {
  withRouter
} from "react-router-dom";


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '',
                  password :'',
                  login : false,
                  error : [{user:false},{pass: false}]
                 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({formu:{user: event.target.value}});
  }

  ChangeUser = (event) => {
    this.setState({'user' : event.target.value});
  }

  ChangePass = (event) => {
  this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  BuscarUsuario = (event) =>{
      let usuario = this.state.user;
      if (this.state.user==="" || this.state.password==="" || (usuario.indexOf("@bi-lab.com.ar")===-1) || usuario.indexOf("*")!==-1 || usuario.indexOf("'")!==-1 || usuario.indexOf(")")!==-1 || usuario.indexOf("@bi-lab.com.ar")===-1 || !(usuario.length>3)) {
        console.log("siddd");
      }else{
        console.log("nooo");

      }
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
                              if (nombresjson.recordsets[0][0]) {
                                localStorage.setItem('sesion',JSON.stringify(nombresjson.recordsets[0][0]));
                                this.props.history.push('/home');
                              }else{
                                console.log("caso2 error",nombresjson.recordsets[0][0]);
                                this.setState({login:true});

                              }
                              
                            });
      event.preventDefault();
    }

    onBlurUser = (event) =>{
        let usuario = event.target.value;
           
          if (usuario.indexOf("*")!==-1 || usuario.indexOf("'")!==-1 || usuario.indexOf(")")!==-1 || usuario.indexOf("@bi-lab.com.ar")===-1 || !(usuario.length>3)){
            console.log("usuario.indexOf(*)==-1",usuario.indexOf("*")===-1);
            console.log("usuario.indexOf(')==-1",usuario.indexOf("'")===-1);
            console.log("usuario.indexOf())==-1",usuario.indexOf(")")===-1);
            console.log("usuario.indexOf(@bi-lab.com.ar)===-1",usuario.indexOf("@bi-lab.com.ar")===-1);
            this.setState({error:[{user : true},
                              {pass : this.state.error[1].pass}
                      ]});        
          }
      
      
    }
    onBlurPass = (event) =>{
      if (!(event.target.value.length>3)) {
          this.setState({error:[{user : this.state.error[0].user},
                            {pass : true}
                    ]});
      }
    }
    onFocusUser = (event) =>{
        this.setState({error:[{user : false},
                      {pass : this.state.error[1].pass}
            ]});
        this.setState({login:false});
    }
    onFocusPass = (event) =>{
        this.setState({error:[{user : this.state.error[0].user},
                      {pass : false}
            ]});
        this.setState({login:false});
    }


  render() {

    const ErrorUser = (
          <p className="ms-error"> Ingrese un usuario valido </p>
    );
    const ErrorLogin = (
          <p className="ms-error"> Usuario o contraseña incorrecta </p>
    );
    const ErrorPass = (
          <p className="ms-error"> Ingrese una contraseña mayor a 4 cracteres </p>
    );

    return (
    <div className="logIn">
        <form onSubmit={this.BuscarUsuario} className="formLogin">
            <div>
              <label >Usuario</label>
              <input placeholder="Ingere su Usuario"
                     name="user"
                     type="text"
                     required
                     onBlur={this.onBlurUser}
                     onFocus={this.onFocusUser}
                     value={this.state.user}
                     onChange={this.ChangeUser} />
              {this.state.error[0].user?ErrorUser:''}
            </div>
          
            <div>
              <label> Contraseña </label>
              <input placeholder="Ingere su Password"
                     type="password"
                     required
                     onBlur={this.onBlurPass}
                     onFocus={this.onFocusPass}
                     value={this.state.password}
                     onChange={this.ChangePass} />
              {this.state.error[1].pass?ErrorPass:''}
            </div>

          <input type="submit" value="Ingresar" />
              {this.state.login?ErrorLogin:''}
          
        </form>
    </div>

    );
  }
}
export default withRouter(LogIn);