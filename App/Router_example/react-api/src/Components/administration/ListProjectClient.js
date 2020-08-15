import React from 'react';
import '../../css/ListProjectClient.css';

    function ListProjectClient(props) {
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
                           {datos.Client}
                         </td> 
                          <td>
                           {datos.Project}
                         </td>                     
                     </tr>
                  )
                }
              </tbody>
                
            </table>
          </div>
        );
    }


 export default ListProjectClient;