import React from "react";
//import { Switch, Route } from "react-router-dom";
import TableHoursUser from './TableHoursUser';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        ListHours : []
    };

  }
//const Header = [
//					{'value':'cliente','value':'Horas','value':'Tarea','value':'Descripcion','value':'fecha','value':'proyecto'}
//				];


  getListAllHours(){
     //PROYECTOS
        fetch('/api/getListAllHours',{method: 'GET'})
        .then(res => res.json())
        .then(nombresjson => {  

            console.log(this.state.ListHours);
             this.setState({ListHours : nombresjson.recordsets[0]});
     });
  }

   componentDidMount(){
      this.getListAllHours();
   }
    render(){
        const Header = [
                    {'value':'cliente'},
                    {'value':'Horas'},
                    {'value':'Tarea'},
                    {'value':'Descripcion'},
                    {'value':'fecha'},
                    {'value':'proyecto'}
                ];
            return(
              <div className="listHours">
              	<h1>Mi aplicación con React agusRouter v4!</h1>
                <div>
                    <div></div>
                    <div>fecha: 2020/06/04</div>
                </div>
              	<TableHoursUser Headers={Header} body={this.state.ListHours} />
              </div>
            );
    }
}
export default Home;