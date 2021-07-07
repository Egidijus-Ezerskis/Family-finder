import React from 'react';
import './card.style.css';
 const Card =(props)=>(

	<div className='card-container'>
	<img alt='family'
	     src={`https://robohash.org/${props.family.id}?size=140x140`}/>
		<h2>{props.family.name} </h2>
		<p>{props.family.email}</p>
	</div>

	);
	export default Card;
