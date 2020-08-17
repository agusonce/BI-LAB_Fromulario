import React from 'react';
import '../../css/ListAsign.css';

    function ListAsign(props) {
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
                           {datos.Value1}
                         </td> 
                          <td>
                           {datos.Value2}
                         </td>                     
                     </tr>
                  )
                }
              </tbody>
                
            </table>
          </div>
        );
    }


 export default ListAsign;