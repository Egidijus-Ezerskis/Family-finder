import React from 'react';
import Card from '../card/card.component'
import './card-list.style.css';
  const CardList=(props)=>{
	
	return <div className='card-list'>
		{props.family.map(family=>(
         <Card key={family.id}
		  family = {family}/>
			))}
	</div>;
        
		
};
export default CardList;