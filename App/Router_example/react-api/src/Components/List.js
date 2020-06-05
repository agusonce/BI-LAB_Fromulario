 import React from 'react';
 import './css/List.css';
import Item from './Item';
    function List (props) {
        return (
          <div className="List"> 
	          {
	          	props.items.map(item => 
	          		<Item 
	          			key={item.id}
	          			id={item.id}
	          			title={item.title}
	          			image={item.image}

	          		/>
	          	)
	          }
	         
          </div>
        );
    }

    export default List;