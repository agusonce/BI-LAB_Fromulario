import React from 'react';
import '../../css/NewClient.css';
import ListRows from './ListRows';

import {
  withRouter
} from "react-router-dom";

// FormLoadHour: variable para saber a si hay que mostrar el ms de 'complete todos los campos '
class NewClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  Clients: [],
                  Client: '',
                  PressSubmit: false
				        };
    this.handleChangeClient = this.handleChangeClient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  sendDataForm = (Client) =>{
      fetch('/api/setClient',{
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(Client), // data can be `string` or {object}!
                        headers:{
                          'Content-Type': 'application/json'
                        }})
    .then(res => res.json()).then(nombresjson => {
       // this.props.history.push('/Ms-Succes');
       this.getAllProyects();
      this.setState({PressSubmit: false});
      this.setState({Client : ''});

        console.log("susses",nombresjson);
    });

  }
 handleSubmit(event) {
  console.log(this.state.Client);
  if (this.state.Client.trim()=='') {
  }else{
    this.setState({PressSubmit: true});
    let data = {Client : this.state.Client}
    console.log(data);
    console.log( this.state.Client);
    this.sendDataForm(data);
    
  }
  event.preventDefault();
 }

 handleChangeClient(event){
    this.setState({Client: event.target.value});
 }

  getAllProyects(){
     //Clients
        fetch('/api/ListAllClient',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {   this.setState({Clients : nombresjson.recordsets[0]})});
  }
  componentDidMount(){
     //Clients
      this.getAllProyects();
      console.log("no me ves?")
   }
  render() {
  const Header = [
          {'value':'List Clients'}
        ];


        const ErrorProyecto = (
          <p className="ms-error">*Ingrese un Proyecto</p>
        )

        return (
          <div className="newClient">
                  <label>New Peoject </label>
                 <form onSubmit={this.handleSubmit} className="form">

                    <label>
                      <p>Name Client :</p>
                      <input type="text" 
                              value={this.state.Client} 
                              onChange={this.handleChangeClient}
                              placeholder="Set Client name"
                      />
                        {(this.state.Cliente==='1')&&this.state.PressSubmit?ErrorProyecto:''}
                    </label>
                    <button className="button" disabled={this.state.PressSubmit||this.state.Client.trim()==''?true:false} onClick={this.handleSubmit} >Cargar </button>
                
                </form>

                <ListRows key={this.state.Clients} Headers={Header} body={this.state.Clients}/>
          </div>
        );
  }
}
export default  withRouter(NewClient);