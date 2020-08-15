import React from 'react';
import '../css/TableHoursUser.css';

    function TableHoursUser(props) {
        return (
          <div>
            <table className="tableHoursUser">
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
                          <td key={datos.Key}>
                           {datos.Horas}
                         </td>                     
                          <td>
                           {datos.Tarea}
                         </td>
                          <td>
                           {datos.Cliente}
                         </td>
                          <td>
                           {datos.Descripcion}
                         </td>
                          <td>
                           {datos.fecha}
                         </td>
                          <td>
                           {datos.Proyecto}
                         </td>
                         
                     </tr>
                  )
                }
               </tbody>
                
            </table>
          </div>
        );
    }


 export default TableHoursUser;