   // src/App.js

    import React, { Component } from 'react';
    import Menu from './Menu';
    import Main from './Main';
import '../css/App.css';

    class App extends Component {

      render() {
        
       
        return (
          <div className="app">
            <Menu title="BI-LAB" className="menu" />
            <Main className="main" />
          </div>
              );
      }
    }

    export default App;