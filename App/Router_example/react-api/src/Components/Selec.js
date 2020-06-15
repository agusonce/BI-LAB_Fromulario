 import React,{Component} from 'react';
 import '../css/selec.css';


class Selec extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {this.setState({value: event.target.value});}

  render() {
   let saludar= (event) =>{
    this.props.onChangea(event.target.value);
  }

    return (    
          <select value={this.props.value} onChange={saludar} className="selec">
            {
              this.props.options.map(item => 
                <option key={item.Id} value={item.Id}>{item.Value}</option>
              )
            }
          </select>
    );
  }
}

export default Selec;