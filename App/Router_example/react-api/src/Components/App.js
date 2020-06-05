   // src/App.js
    import React, { Component } from 'react';
    import Menu from './Menu';
    import Main from './Main';
import '../css/App.css';

    class App extends Component {
      constructor(props){
        super(props);
       /* this.state = {
            books:[
              {id:0, rating: 4, title: 'Henry parker y la acaricia del fuego', image : 'libro01.jpg'},
              {id:2, rating: 3, title: 'Henry parker y la acaricia del fuego', image : 'libro02.jpg'}
            ],
            nombres:[]
          };*/
      }

      BuscarUsuario =() =>{
        fetch('/api/')
        .then(res => res.json())
        .then(nombresjson => console.log(nombresjson));
      }
      render() {
        
       
        return (
          <div className="app">
            < Menu title="Amazon"/>
            < Main/>

          </div>
              );
      }
    }

    export default App;