import React from 'react';
import Selec from './Selec';
import '../css/Ms.css';
import {
  Link,
  withRouter
} from "react-router-dom";

// FormLoadHour: variable para saber a si hay que mostrar el ms de 'complete todos los campos '
class Ms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Descripcion : ''};

  }

  render() {
    const MessageSucces = (
        <div className="succes">
            <p>
                Load Succes
            </p>
            <Link className="volver" to="/home">
                Ir a Home
            </Link>
        </div>
    );

    const MessageError = (
       <div className="error">
            <p>
                Load Error
            </p>
            <Link className="volver" to="/home">
                Ir a Home
            </Link>
        </div>
    );

    return (
     <div className="ms-result">

{this.props.message=="error"?MessageError:MessageSucces}

     </div>
    );
  }
}
export default  withRouter(Ms);