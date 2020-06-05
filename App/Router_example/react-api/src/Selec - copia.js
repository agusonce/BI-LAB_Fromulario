 import React,{Component} from 'react';


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
        <label>
          Pick your favorite flavor:
          <select value={this.props.value} onChange={saludar} >
            {
              this.props.options.map(item => 
                <option key={item.value} value={item.value}>{item.value}</option>
              )
            }
          </select>
        </label>
    );
  }
}

export default Selec;