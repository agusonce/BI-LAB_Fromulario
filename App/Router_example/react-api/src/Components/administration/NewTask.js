import React from 'react';
import '../../css/NewTask.css';
import ListRows from './ListRows';

import {
  withRouter
} from "react-router-dom";

// FormLoadHour: variable para saber a si hay que mostrar el ms de 'complete todos los campos '
class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  ListTasks: [],
                  Task: '',
                  PressSubmit: false
				        };
    this.handleChangeTask = this.handleChangeTask.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  sendDataForm = (Task) =>{
      fetch('/api/setTask',{
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(Task), // data can be `string` or {object}!
                        headers:{
                          'Content-Type': 'application/json'
                        }})
    .then(res => res.json()).then(nombresjson => {
       // this.props.history.push('/Ms-Succes');
       this.getAllTasks();
        console.log("susses",nombresjson);
    });

  }

 handleSubmit(event) {
  console.log(this.state.Task);
  if (this.state.Task.trim()==''){
    console.log("data: if");
    this.setState({PressSubmit:true});

  }else{
    console.log("data: Else");

    let data = {task : this.state.Task};
    this.setState({Task: ''});

    this.sendDataForm(data);

  }
  event.preventDefault();
 }

 handleChangeTask(event){
    this.setState({Task: event.target.value});
    this.setState({PressSubmit:false});
 }

  getAllTasks(){
     //Projects
        fetch('/api/getListAllTasks',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {   this.setState({ListTasks : nombresjson.recordsets[0]})});
  }
  componentDidMount(){
     //Projects
      this.getAllTasks();
      console.log("no me ves?")
   }
  render() {
  const Header = [
          {'value':'List Tasks'}
        ];


        const ErrorTask = (
          <p className="ms-error">*Ingrese una Tarea</p>
        )

        return (
          <div className="NewTask">
                  <label>New Task </label>
                 <form  className="form">

                    <label>
                      <p>Name Task :</p>
                      <input type="text" 
                              value={this.state.Task} 
                              onChange={this.handleChangeTask}
                              placeholder="Set project name"
                      />
                        {this.state.Task.trim()==''&&this.state.PressSubmit?ErrorTask:''}
                    </label>
                    <button className="button" disabled={this.state.PressSubmit||this.state.Task.trim()==''?true:false} onClick={this.handleSubmit} >Enviar </button>
                </form>
                <ListRows key={this.state.ListTasks} Headers={Header} body={this.state.ListTasks}/>
          </div>
        );
  }
}
export default  withRouter(NewTask);