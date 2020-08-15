import React from 'react';
import '../../css/ListRows.css';

    function ListRows(props) {
        return (
          <div>
            <table className="ListRows">
              <thead>

                <tr>
                    {
                      props.Headers.map(header => 
                          <th key={header.value}>
                           {header.value}
                          </th>
                      )
                    }
                   
                </tr>
              </thead>
              <tbody>
   
                {
                  props.body.map(datos => 
                     <tr key={datos.Key}>
                          <td>
                           {datos.Value}
                         </td>                     
                         
                     </tr>
                  )
                }
              </tbody>
                
            </table>
          </div>
        );
    }


 export default ListRows;