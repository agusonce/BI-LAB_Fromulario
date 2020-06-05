import React from 'react';
 import './css/Item.css';

    function Item(props) {
        return (
		   	<div className="item">
		   	{props.image}
				<div className="image"><img src={'img/' + props.image} width="100%" alt="holamundo"/></div>
				<div className="rating">
					<p>
						"{'img/' + props.image}"
					</p>
				</div>
			</div>
        );
    }


 export default Item;
