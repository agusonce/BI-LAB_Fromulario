 import React,{Component} from 'react';
 import './css/selec.css';


class Selec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut',
                  name: 'agus'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

 

  render() {
   let saludar= (event) =>{
    //console.log(this.props.options);
    this.props.onChangea(event.target.value);
  }

    return (    
          <select value={this.props.value} onChange={saludar} className="selec">
            {
              this.props.options.map(item => 
                <option key={item.value} value={item.value}>{item.value}</option>
              )
            }
          </select>
    );
  }
}

export default Selec;