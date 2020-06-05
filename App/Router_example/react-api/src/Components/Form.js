import React,{Component} from 'react';
import Selec from './Selec';
import './css/form.css';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : '',
                  mail : '',
                  apellido :'',
				          selec : [{value:'agus'},
				  		            {value:'mauro'},
				  		            {value:'kevin'}],
				          selecValue : 'agus'
				        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});

  }

  handleChangeMail = (event) => {
  this.setState({mail: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);

    event.preventDefault();
  }

  toggleShow = (datachild) => {
  	console.log(datachild);
  	this.setState({selecValue: datachild})

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
         <p> Name:{this.state.value} </p>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <p className="ms-error">*comprete el formulario</p>
        </label>

        <label>
          <p>Mail:{this.state.mail}</p>
          <input type="text" value={this.state.mail} onChange={this.handleChangeMail} />
          <p className="ms-error">*ingrese un valor valido</p>
        </label>

        <label>
          <p>proyecto</p>
            <Selec  values={this.state.selecValue} options={this.state.selec} onChangea={this.toggleShow} />
          <p className="ms-error">*Seleccione un valor</p>
        </label>
            
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;